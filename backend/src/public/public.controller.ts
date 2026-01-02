import { Controller, Get, Param, Post, Body, Query, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Restaurant } from '../entities/restaurant.entity';
import { Category } from '../entities/category.entity';
import { Product } from '../entities/product.entity';
import { Table } from '../entities/table.entity';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { ProductVariant } from '../entities/product-variant.entity';
import { OrderStatus } from '../common/enums/order-status.enum';
import { TableSessionsService } from '../table-sessions/table-sessions.service';
import { ClientsService } from '../clients/clients.service';
import { LoyaltyService } from '../loyalty/loyalty.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import { MarketingService } from '../marketing/marketing.service';

@Controller('public')
export class PublicController {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    @InjectRepository(ProductVariant)
    private productVariantsRepository: Repository<ProductVariant>,
    private dataSource: DataSource,
    private tableSessionsService: TableSessionsService,
    private clientsService: ClientsService,
    private loyaltyService: LoyaltyService,
    private subscriptionsService: SubscriptionsService,
    private marketingService: MarketingService,
  ) {}

  @Get('restaurants')
  async getAllRestaurants() {
    const restaurants = await this.restaurantsRepository.find({
      where: { isActive: true },
      select: ['id', 'name', 'address', 'city', 'zipCode', 'country', 'phone', 'email', 'logo', 'description'],
      order: { name: 'ASC' },
    });

    return restaurants;
  }

  @Get('restaurant/:id')
  async getRestaurant(@Param('id') id: string) {
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id, isActive: true },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

      return {
      id: restaurant.id,
      name: restaurant.name,
      address: restaurant.address,
      city: restaurant.city,
      zipCode: restaurant.zipCode,
      country: restaurant.country,
      phone: restaurant.phone,
      email: restaurant.email,
      logo: restaurant.logo,
      description: restaurant.description,
      paymentProvider: restaurant.paymentProvider || 'CASH_ONLY',
    };
  }

  @Get('restaurant/:restaurantId/menu')
  async getMenu(@Param('restaurantId') restaurantId: string) {
    // Requête optimisée : charger uniquement les produits du restaurant avec une seule requête
    const products = await this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .leftJoinAndSelect('product.images', 'images')
      .leftJoinAndSelect('product.variants', 'variants')
      .where('category.restaurantId = :restaurantId', { restaurantId })
      .andWhere('product.isActive = :isActive', { isActive: true })
      .andWhere('product.isAvailable = :isAvailable', { isAvailable: true })
      .andWhere('category.isActive = :catActive', { catActive: true })
      .orderBy('category.displayOrder', 'ASC')
      .addOrderBy('product.displayOrder', 'ASC')
      .getMany();

    // Récupérer les catégories séparément (plus léger)
    const categories = await this.categoriesRepository.find({
      where: { restaurantId, isActive: true },
      select: ['id', 'name', 'description', 'image', 'displayOrder'],
      order: { displayOrder: 'ASC', name: 'ASC' },
    });

    // Organiser les produits par catégorie
    const menu = categories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      image: category.image,
      products: products
        .filter((p) => p.categoryId === category.id)
        .map((product) => ({
          id: product.id,
          name: product.name,
          description: product.shortDescription || product.fullDescription || null,
          price: Number(product.price),
          images: product.images?.map((img) => img.url).filter(Boolean) || [],
          variants: product.variants?.map((v) => ({
            id: v.id,
            name: v.name,
            priceModifier: Number(v.priceModifier),
          })) || [],
          type: product.type,
          isAvailable: product.isAvailable,
        })),
    }));

    return menu;
  }

  @Get('table/:id')
  async getTable(@Param('id') id: string) {
    const table = await this.tablesRepository.findOne({
      where: { id },
      relations: ['restaurant'],
    });

    if (!table || !table.isActive) {
      throw new NotFoundException('Table not found or inactive');
    }

    return {
      id: table.id,
      name: table.name,
      restaurantId: table.restaurantId,
      restaurant: {
        id: table.restaurant.id,
        name: table.restaurant.name,
      },
    };
  }

  @Post('orders')
  async createOrder(@Body() body: {
    restaurantId: string;
    tableId?: string;
    tableSessionId?: string; // ID de la session de table (optionnel, créera/récupérera une session si tableId fourni)
    clientIdentifier?: string; // Identifiant unique du client (généré côté client)
    clientName?: string; // Nom optionnel du client
    items: Array<{
      productId: string;
      variantId?: string;
      quantity: number;
      notes?: string;
    }>;
    notes?: string;
  }) {
    // Vérifier le restaurant
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id: body.restaurantId, isActive: true },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found or inactive');
    }

    // Vérifier la table si fournie
    let tableSessionId = body.tableSessionId;
    if (body.tableId) {
      const table = await this.tablesRepository.findOne({
        where: { id: body.tableId, restaurantId: body.restaurantId, isActive: true },
      });
      if (!table) {
        throw new BadRequestException('Invalid table for this restaurant');
      }

      // Créer ou récupérer une session active pour cette table
      if (!tableSessionId) {
        const session = await this.tableSessionsService.getOrCreateActiveSession(
          body.tableId,
          body.restaurantId,
        );
        tableSessionId = session.id;
      }
    }

    // Créer ou récupérer le client
    if (body.clientIdentifier) {
      await this.clientsService.getOrCreateClient(
        body.clientIdentifier,
        body.restaurantId,
        body.clientName,
      );
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let totalAmount = 0;
      const orderItems: OrderItem[] = [];

      for (const itemDto of body.items) {
        const product = await this.productsRepository.findOne({
          where: { id: itemDto.productId, isActive: true },
          relations: ['category'],
        });

        if (!product || product.category?.restaurantId !== body.restaurantId) {
          throw new BadRequestException(`Product ${itemDto.productId} not found or invalid for this restaurant`);
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

      // Créer la commande
      const order = this.ordersRepository.create({
        restaurantId: body.restaurantId,
        tableId: body.tableId,
        tableSessionId: tableSessionId,
        clientIdentifier: body.clientIdentifier || null,
        clientName: body.clientName || null,
        orderType: 'ON_SITE',
        status: OrderStatus.PENDING,
        notes: body.notes,
        totalAmount,
        isPaid: false,
      });

      const savedOrder = await queryRunner.manager.save(order);

      // Associer les items à la commande
      for (const item of orderItems) {
        item.orderId = savedOrder.id;
        await queryRunner.manager.save(item);
      }

      await queryRunner.commitTransaction();

      // Mettre à jour le total de la session si applicable
      if (tableSessionId) {
        await this.tableSessionsService.updateSessionTotal(tableSessionId);
      }

      // Récupérer la commande complète
      const completeOrder = await this.ordersRepository.findOne({
        where: { id: savedOrder.id },
        relations: ['items', 'table', 'restaurant', 'tableSession'],
      });

      return completeOrder;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  /**
   * Obtenir toutes les commandes d'une session de table (pour voir qui a commandé quoi)
   */
  @Get('table-session/:sessionId/orders')
  async getSessionOrders(@Param('sessionId') sessionId: string) {
    const session = await this.tableSessionsService.getSessionWithOrders(sessionId);
    return session;
  }

  /**
   * Obtenir le compte de fidélité d'un client (public, sans auth)
   */
  @Get('loyalty/account')
  async getLoyaltyAccount(
    @Query('restaurantId') restaurantId: string,
    @Query('clientIdentifier') clientIdentifier: string,
  ) {
    if (!restaurantId || !clientIdentifier) {
      return { points: 0, totalPointsEarned: 0, totalPointsSpent: 0, transactions: [] };
    }
    const account = await this.loyaltyService.getAccountByClientIdentifier(
      restaurantId,
      clientIdentifier,
    );
    if (!account) {
      return { points: 0, totalPointsEarned: 0, totalPointsSpent: 0, transactions: [] };
    }
    return account;
  }

  /**
   * Obtenir les récompenses disponibles pour un client (public)
   */
  @Get('loyalty/rewards')
  async getLoyaltyRewards(
    @Query('restaurantId') restaurantId: string,
    @Query('clientIdentifier') clientIdentifier: string,
  ) {
    if (!restaurantId || !clientIdentifier) {
      return [];
    }
    const account = await this.loyaltyService.getAccountByClientIdentifier(
      restaurantId,
      clientIdentifier,
    );
    if (!account) {
      return [];
    }
    return await this.loyaltyService.getAvailableRewards(restaurantId, account.clientId);
  }

  /**
   * Utiliser une récompense (public, pour clients non authentifiés)
   */
  @Post('loyalty/rewards/use')
  async useLoyaltyReward(
    @Body() body: {
      restaurantId: string;
      clientIdentifier: string;
      rewardId: string;
      orderId?: string;
    },
  ) {
    if (!body.restaurantId || !body.clientIdentifier || !body.rewardId) {
      throw new BadRequestException('restaurantId, clientIdentifier et rewardId sont requis');
    }
    const account = await this.loyaltyService.getAccountByClientIdentifier(
      body.restaurantId,
      body.clientIdentifier,
    );
    if (!account) {
      throw new NotFoundException('Compte client non trouvé');
    }
    return await this.loyaltyService.useReward(
      body.restaurantId,
      account.clientId,
      { rewardId: body.rewardId, orderId: body.orderId },
    );
  }

  /**
   * Obtenir les abonnements d'un client (public)
   */
  @Get('subscriptions')
  async getClientSubscriptions(
    @Query('restaurantId') restaurantId: string,
    @Query('clientIdentifier') clientIdentifier: string,
  ) {
    if (!restaurantId || !clientIdentifier) {
      return [];
    }
    const client = await this.clientsService.getClientByIdentifier(restaurantId, clientIdentifier);
    if (!client) {
      return [];
    }
    return await this.subscriptionsService.findByClient(restaurantId, client.id);
  }

  /**
   * Utiliser un repas d'abonnement (public)
   */
  @Post('subscriptions/use')
  async useSubscriptionMeal(
    @Body() body: {
      restaurantId: string;
      clientIdentifier: string;
      subscriptionId: string;
      orderId: string;
      notes?: string;
    },
  ) {
    if (!body.restaurantId || !body.clientIdentifier || !body.subscriptionId || !body.orderId) {
      throw new BadRequestException('Tous les champs sont requis');
    }
    const client = await this.clientsService.getClientByIdentifier(body.restaurantId, body.clientIdentifier);
    if (!client) {
      throw new NotFoundException('Client non trouvé');
    }
    return await this.subscriptionsService.useSubscription(body.restaurantId, {
      subscriptionId: body.subscriptionId,
      orderId: body.orderId,
      notes: body.notes,
    });
  }

  /**
   * Valider un code promo (public)
   */
  @Post('promo-codes/validate')
  async validatePromoCode(
    @Body() body: {
      restaurantId: string;
      code: string;
      orderAmount?: number;
    },
  ) {
    if (!body.restaurantId || !body.code) {
      throw new BadRequestException('restaurantId et code sont requis');
    }
    return await this.marketingService.validatePromoCode(
      body.restaurantId,
      body.code,
      body.orderAmount || 0,
    );
  }

  /**
   * Appliquer un code promo (public)
   */
  @Post('promo-codes/apply')
  async applyPromoCode(
    @Body() body: {
      restaurantId: string;
      code: string;
      orderAmount: number;
      clientIdentifier?: string;
    },
  ) {
    if (!body.restaurantId || !body.code || !body.orderAmount) {
      throw new BadRequestException('restaurantId, code et orderAmount sont requis');
    }
    return await this.marketingService.applyPromoCode(
      body.restaurantId,
      { code: body.code, clientIdentifier: body.clientIdentifier },
      body.orderAmount,
    );
  }
}
