import { Injectable, NotFoundException, BadRequestException, ForbiddenException, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Payment } from '../entities/payment.entity';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { ProductVariant } from '../entities/product-variant.entity';
import { Restaurant } from '../entities/restaurant.entity';
import { OrderStatus } from '../common/enums/order-status.enum';
import { LoyaltyService } from '../loyalty/loyalty.service';
import { VivaWalletService } from './providers/viva-wallet.service';
import { StripeService } from './providers/stripe.service';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

interface CreateOrderAfterPaymentDto {
  restaurantId: string;
  userId: string;
  clientIdentifier?: string; // Identifiant client pour la fidélité
  orderType: 'TAKEAWAY' | 'DELIVERY';
  deliveryAddress?: string;
  items: Array<{
    productId: string;
    variantId?: string;
    quantity: number;
    notes?: string;
  }>;
  notes?: string;
  paymentIntentId: string; // ID du paiement (pour vérification)
}

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(ProductVariant)
    private productVariantsRepository: Repository<ProductVariant>,
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
    private dataSource: DataSource,
    @Inject(forwardRef(() => LoyaltyService))
    private loyaltyService: LoyaltyService,
    private vivaWalletService: VivaWalletService,
    private stripeService: StripeService,
  ) {}

  /**
   * Créer une intention de paiement avec le provider configuré
   */
  async createPaymentIntent(
    amount: number,
    restaurantId: string,
    currency: string = 'EUR',
    description?: string,
    metadata?: Record<string, any>,
  ): Promise<{
    paymentIntentId: string;
    clientSecret?: string;
    redirectUrl?: string;
    provider: string;
  }> {
    // Récupérer le restaurant et sa configuration de paiement
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id: restaurantId },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    const provider = restaurant.paymentProvider || 'CASH_ONLY';

    // Si pas de provider configuré, retourner une simulation
    if (provider === 'CASH_ONLY' || !provider) {
      const paymentIntentId = `pi_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      return {
        paymentIntentId,
        provider: 'CASH_ONLY',
      };
    }

    // Utiliser le provider configuré
    if (provider === 'VIVA_WALLET') {
      const result = await this.vivaWalletService.createPaymentIntent(
        amount,
        currency,
        description || `Commande ${restaurant.name}`,
        `Commande KeepFood - ${restaurant.name}`,
        metadata,
      );

      return {
        paymentIntentId: result.orderCode,
        redirectUrl: result.redirectUrl,
        provider: 'VIVA_WALLET',
      };
    } else if (provider === 'STRIPE') {
      const result = await this.stripeService.createPaymentIntent(
        amount,
        currency.toLowerCase(),
        description,
        metadata,
      );

      return {
        paymentIntentId: result.paymentIntentId,
        clientSecret: result.clientSecret,
        provider: 'STRIPE',
      };
    }

    throw new BadRequestException(`Provider de paiement non supporté: ${provider}`);
  }

  /**
   * Confirmer le paiement et créer la commande APRÈS le paiement réussi
   */
  async confirmPaymentAndCreateOrder(
    createOrderDto: CreateOrderAfterPaymentDto,
  ): Promise<Order> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Vérifier le restaurant
      const restaurant = await this.restaurantsRepository.findOne({
        where: { id: createOrderDto.restaurantId, isActive: true },
      });

      if (!restaurant) {
        throw new NotFoundException('Restaurant not found or inactive');
      }

      // Vérifier le provider de paiement du restaurant
      const provider = restaurant.paymentProvider || 'CASH_ONLY';

      // Vérifier que le paiement est valide selon le provider
      if (provider !== 'CASH_ONLY' && createOrderDto.paymentIntentId) {
        let paymentStatus: 'SUCCESS' | 'FAILED' | 'PENDING' = 'PENDING';
        let transactionId: string | undefined;

        if (provider === 'VIVA_WALLET') {
          const verification = await this.vivaWalletService.verifyPayment(createOrderDto.paymentIntentId);
          paymentStatus = verification.status;
          transactionId = verification.transactionId;
        } else if (provider === 'STRIPE') {
          const verification = await this.stripeService.verifyPayment(createOrderDto.paymentIntentId);
          paymentStatus = verification.status;
          transactionId = verification.chargeId;
        }

        if (paymentStatus !== 'SUCCESS') {
          throw new BadRequestException(`Paiement non confirmé. Statut: ${paymentStatus}`);
        }

        // Stocker le transactionId pour référence
        createOrderDto.paymentIntentId = transactionId || createOrderDto.paymentIntentId;
      }

      // Calculer le total et créer les items
      let totalAmount = 0;
      const orderItems: OrderItem[] = [];

      for (const itemDto of createOrderDto.items) {
        const product = await this.productsRepository.findOne({
          where: { id: itemDto.productId, isActive: true },
          relations: ['category'],
        });

        if (!product || product.category?.restaurantId !== createOrderDto.restaurantId) {
          throw new BadRequestException(`Product ${itemDto.productId} not found or invalid`);
        }

        let unitPrice = Number(product.price);
        let variant: ProductVariant | null = null;

        if (itemDto.variantId) {
          variant = await this.productVariantsRepository.findOne({
            where: { id: itemDto.variantId },
          });
          if (variant) {
            unitPrice += Number(variant.priceModifier);
          }
        }

        const itemTotal = unitPrice * itemDto.quantity;
        totalAmount += itemTotal;

        const orderItem = this.orderItemsRepository.create({
          productId: product.id,
          quantity: itemDto.quantity,
          unitPrice: unitPrice,
          totalPrice: itemTotal,
          variantId: variant?.id || null,
          notes: itemDto.notes || null,
          itemStatus: 'PENDING',
        });

        orderItems.push(orderItem);
      }

      // Créer la commande (seulement maintenant, après paiement réussi)
      const order = this.ordersRepository.create({
        restaurantId: createOrderDto.restaurantId,
        userId: createOrderDto.userId,
        clientIdentifier: createOrderDto.clientIdentifier || null,
        orderType: createOrderDto.orderType,
        status: OrderStatus.PENDING,
        notes: createOrderDto.notes || null,
        totalAmount,
        isPaid: true, // Déjà payé
      });

      // Ajouter l'adresse de livraison dans les notes si c'est une livraison
      if (createOrderDto.orderType === 'DELIVERY' && createOrderDto.deliveryAddress) {
        order.notes = order.notes 
          ? `${order.notes}\n\nAdresse de livraison: ${createOrderDto.deliveryAddress}`
          : `Adresse de livraison: ${createOrderDto.deliveryAddress}`;
      }

      const savedOrder = await queryRunner.manager.save(order);

      // Associer les items à la commande
      for (const item of orderItems) {
        item.orderId = savedOrder.id;
        await queryRunner.manager.save(item);
      }

      // Créer l'enregistrement de paiement
      const payment = this.paymentsRepository.create({
        orderId: savedOrder.id,
        restaurantId: createOrderDto.restaurantId,
        amount: totalAmount,
        paymentMethod: provider === 'CASH_ONLY' ? 'CASH' : 'ONLINE',
        status: 'SUCCESS',
        provider: provider === 'CASH_ONLY' ? 'Cash' : provider,
        transactionId: createOrderDto.paymentIntentId || null,
      });

      await queryRunner.manager.save(payment);

      await queryRunner.commitTransaction();

      // Récupérer la commande complète
      const completeOrder = await this.ordersRepository.findOne({
        where: { id: savedOrder.id },
        relations: ['items', 'restaurant', 'user'],
      });

      // Ajouter des points de fidélité si le client a un identifiant
      if (completeOrder?.clientIdentifier) {
        try {
          const points = await this.loyaltyService.calculatePointsFromOrder(completeOrder);
          if (points > 0) {
            await this.loyaltyService.addPoints(
              createOrderDto.restaurantId,
              completeOrder.clientIdentifier, // On passe l'identifiant, le service trouvera le client
              points,
              completeOrder.id,
              `Points gagnés pour la commande #${completeOrder.id}`,
            );
          }
        } catch (error) {
          // Ne pas faire échouer la commande si l'ajout de points échoue
          console.error('Erreur lors de l\'ajout de points de fidélité:', error);
        }
      }

      return completeOrder!;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * Gérer le webhook Viva Wallet
   */
  async handleVivaWalletWebhook(payload: any, signature: string): Promise<{ received: boolean }> {
    try {
      const webhookData = await this.vivaWalletService.processWebhook(payload, signature);

      // Trouver le paiement correspondant
      const payment = await this.paymentsRepository.findOne({
        where: { transactionId: webhookData.orderCode },
        relations: ['order'],
      });

      if (payment) {
        payment.status = webhookData.status === 'SUCCESS' ? 'SUCCESS' : 'FAILED';
        await this.paymentsRepository.save(payment);

        // Mettre à jour la commande si le paiement a réussi
        if (webhookData.status === 'SUCCESS' && payment.order) {
          payment.order.isPaid = true;
          await this.ordersRepository.save(payment.order);
        }
      }

      return { received: true };
    } catch (error) {
      console.error('Erreur lors du traitement du webhook Viva Wallet:', error);
      return { received: false };
    }
  }

  /**
   * Gérer le webhook Stripe
   */
  async handleStripeWebhook(payload: string | Buffer, signature: string): Promise<{ received: boolean }> {
    try {
      const event = await this.stripeService.processWebhook(payload, signature);

      // Traiter selon le type d'événement
      if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data as any;
        
        // Trouver le paiement correspondant
        const payment = await this.paymentsRepository.findOne({
          where: { transactionId: paymentIntent.id },
          relations: ['order'],
        });

        if (payment) {
          payment.status = 'SUCCESS';
          await this.paymentsRepository.save(payment);

          // Mettre à jour la commande
          if (payment.order) {
            payment.order.isPaid = true;
            await this.ordersRepository.save(payment.order);
          }
        }
      } else if (event.type === 'payment_intent.payment_failed') {
        const paymentIntent = event.data as any;
        
        const payment = await this.paymentsRepository.findOne({
          where: { transactionId: paymentIntent.id },
        });

        if (payment) {
          payment.status = 'FAILED';
          await this.paymentsRepository.save(payment);
        }
      } else if (event.type === 'charge.refunded') {
        const charge = event.data as any;
        
        const payment = await this.paymentsRepository.findOne({
          where: { transactionId: charge.payment_intent },
        });

        if (payment) {
          payment.status = 'REFUNDED';
          await this.paymentsRepository.save(payment);
        }
      }

      return { received: true };
    } catch (error) {
      console.error('Erreur lors du traitement du webhook Stripe:', error);
      return { received: false };
    }
  }

  /**
   * Obtenir l'historique des paiements
   */
  async getPaymentHistory(
    restaurantId: string,
    user: User,
    limit: number = 50,
    offset: number = 0,
  ): Promise<{ payments: Payment[]; total: number }> {
    await this.checkRestaurantAccess(restaurantId, user);

    const [payments, total] = await this.paymentsRepository.findAndCount({
      where: { restaurantId },
      relations: ['order', 'order.table'],
      order: { createdAt: 'DESC' },
      take: limit,
      skip: offset,
    });

    return { payments, total };
  }

  /**
   * Obtenir un paiement par ID
   */
  async findOne(id: string, user: User): Promise<Payment> {
    const payment = await this.paymentsRepository.findOne({
      where: { id },
      relations: ['order', 'order.table', 'restaurant'],
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }

    await this.checkRestaurantAccess(payment.restaurantId, user);

    return payment;
  }

  /**
   * Rembourser un paiement
   */
  async refundPayment(
    paymentId: string,
    user: User,
    amount?: number,
  ): Promise<Payment> {
    const payment = await this.findOne(paymentId, user);

    if (payment.status !== 'SUCCESS') {
      throw new BadRequestException('Seuls les paiements réussis peuvent être remboursés');
    }

    if (payment.provider === 'STRIPE' && payment.transactionId) {
      // Rembourser via Stripe
      const result = await this.stripeService.refundPayment(payment.transactionId, amount);
      payment.status = 'REFUNDED';
      payment.metadata = JSON.stringify({ refundId: result.refundId, ...JSON.parse(payment.metadata || '{}') });
    } else if (payment.provider === 'VIVA_WALLET' && payment.transactionId) {
      // Rembourser via Viva Wallet
      const result = await this.vivaWalletService.refundPayment(payment.transactionId, amount);
      payment.status = 'REFUNDED';
      payment.metadata = JSON.stringify({ refundId: result.refundId, ...JSON.parse(payment.metadata || '{}') });
    } else {
      // Remboursement manuel (cash)
      payment.status = 'REFUNDED';
    }

    return this.paymentsRepository.save(payment);
  }

  private async checkRestaurantAccess(restaurantId: string, user: User): Promise<void> {
    if (user.role === UserRole.SUPER_ADMIN) {
      return;
    }

    if (user.restaurantId !== restaurantId) {
      throw new ForbiddenException('You do not have access to this restaurant');
    }
  }
}

