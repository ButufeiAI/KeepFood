import { Controller, Get, Param, Post, Body, NotFoundException, BadRequestException } from '@nestjs/common';
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
  ) {}

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
    };
  }

  @Get('restaurant/:restaurantId/menu')
  async getMenu(@Param('restaurantId') restaurantId: string) {
    const categories = await this.categoriesRepository.find({
      where: { restaurantId, isActive: true },
      order: { displayOrder: 'ASC', name: 'ASC' },
    });

    const allProducts = await this.productsRepository.find({
      where: { isActive: true },
      relations: ['images', 'variants', 'category'],
      order: { displayOrder: 'ASC', name: 'ASC' },
    });

    // Filtrer les produits pour ce restaurant uniquement
    const products = allProducts.filter((p) => p.category?.restaurantId === restaurantId);

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
          price: product.price,
          images: product.images?.map((img) => img.url) || [],
          variants: product.variants || [],
          type: product.type,
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
    if (body.tableId) {
      const table = await this.tablesRepository.findOne({
        where: { id: body.tableId, restaurantId: body.restaurantId, isActive: true },
      });
      if (!table) {
        throw new BadRequestException('Invalid table for this restaurant');
      }
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

      // Récupérer la commande complète
      const completeOrder = await this.ordersRepository.findOne({
        where: { id: savedOrder.id },
        relations: ['items', 'table', 'restaurant'],
      });

      return completeOrder;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}

