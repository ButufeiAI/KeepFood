import { Injectable, NotFoundException, BadRequestException, forwardRef, Inject } from '@nestjs/common';
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
  ) {}

  /**
   * Simuler un paiement (pour l'instant, retourne toujours succès)
   * En production, on intégrerait avec Stripe, Viva Wallet, etc.
   */
  async createPaymentIntent(amount: number, restaurantId: string): Promise<{
    paymentIntentId: string;
    clientSecret: string;
  }> {
    // Simulation - en production, appeler l'API de paiement (Stripe, etc.)
    const paymentIntentId = `pi_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    const clientSecret = `secret_${paymentIntentId}`;

    // Ici, on pourrait stocker temporairement le paymentIntent dans Redis/cache
    // pour valider plus tard lors de la création de la commande

    return {
      paymentIntentId,
      clientSecret,
    };
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

      // Vérifier que le paymentIntentId est valide (simulation)
      // En production, vérifier avec l'API de paiement
      if (!createOrderDto.paymentIntentId || !createOrderDto.paymentIntentId.startsWith('pi_')) {
        throw new BadRequestException('Invalid payment intent');
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
        paymentMethod: 'ONLINE',
        status: 'SUCCESS',
        provider: 'KeepFood Pay', // Simulation
        transactionId: createOrderDto.paymentIntentId,
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
}

