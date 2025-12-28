import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, In } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { ProductVariant } from '../entities/product-variant.entity';
import { Restaurant } from '../entities/restaurant.entity';
import { Table } from '../entities/table.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import { OrderStatus } from '../common/enums/order-status.enum';

@Injectable()
export class OrdersService {
  constructor(
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
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
    private dataSource: DataSource,
  ) {}

  async create(createOrderDto: CreateOrderDto, user: User): Promise<Order> {
    // Vérifier l'accès au restaurant
    const restaurant = await this.restaurantsRepository.findOne({
      where: { id: createOrderDto.restaurantId },
    });

    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with ID ${createOrderDto.restaurantId} not found`,
      );
    }

    await this.checkRestaurantAccess(createOrderDto.restaurantId, user);

    // Vérifier la table si fournie
    if (createOrderDto.tableId) {
      const table = await this.tablesRepository.findOne({
        where: { id: createOrderDto.tableId },
      });
      if (!table || table.restaurantId !== createOrderDto.restaurantId) {
        throw new BadRequestException('Invalid table for this restaurant');
      }
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Calculer le total et créer les items
      let totalAmount = 0;
      const orderItems: OrderItem[] = [];

      for (const itemDto of createOrderDto.items) {
        const product = await this.productsRepository.findOne({
          where: { id: itemDto.productId },
          relations: ['category'],
        });

        if (!product || !product.isAvailable) {
          throw new BadRequestException(
            `Product ${itemDto.productId} not found or not available`,
          );
        }

        let unitPrice = Number(product.price);
        let variant: ProductVariant | null = null;

        if (itemDto.variantId) {
          variant = await this.productVariantsRepository.findOne({
            where: { id: itemDto.variantId },
          });
          if (variant && variant.isAvailable) {
            unitPrice += Number(variant.priceModifier);
          }
        }

        const itemTotal = unitPrice * itemDto.quantity;
        totalAmount += itemTotal;

        const orderItem = this.orderItemsRepository.create({
          productId: itemDto.productId,
          variantId: itemDto.variantId || null,
          quantity: itemDto.quantity,
          unitPrice,
          totalPrice: itemTotal,
          notes: itemDto.notes,
          itemStatus: 'PENDING',
        });

        orderItems.push(orderItem);
      }

      // Créer la commande
      const order = this.ordersRepository.create({
        restaurantId: createOrderDto.restaurantId,
        tableId: createOrderDto.tableId || null,
        userId: createOrderDto.userId || user.id,
        serverId: user.role === UserRole.SERVEUR ? user.id : null,
        status: OrderStatus.PENDING,
        orderType: createOrderDto.orderType || 'ON_SITE',
        notes: createOrderDto.notes,
        totalAmount,
        isPaid: false,
        items: orderItems,
      });

      const savedOrder = await queryRunner.manager.save(Order, order);
      await queryRunner.commitTransaction();

      return this.ordersRepository.findOne({
        where: { id: savedOrder.id },
        relations: ['restaurant', 'table', 'items', 'items.product', 'items.variant'],
      });
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(restaurantId: string, user: User): Promise<Order[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    return this.ordersRepository.find({
      where: { restaurantId },
      relations: ['table', 'user', 'server', 'items', 'items.product'],
      order: { createdAt: 'DESC' },
    });
  }

  async findActive(restaurantId: string, user: User): Promise<Order[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    return this.ordersRepository.find({
      where: {
        restaurantId,
        status: In([
          OrderStatus.PENDING,
          OrderStatus.CONFIRMED,
          OrderStatus.IN_PREPARATION,
          OrderStatus.READY,
        ]),
      },
      relations: ['table', 'items', 'items.product', 'items.variant'],
      order: { createdAt: 'ASC' },
    });
  }

  async findOne(id: string, user: User): Promise<Order> {
    const order = await this.ordersRepository.findOne({
      where: { id },
      relations: ['restaurant', 'table', 'user', 'server', 'items', 'items.product', 'items.variant'],
    });

    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }

    await this.checkRestaurantAccess(order.restaurantId, user);

    return order;
  }

  async update(
    id: string,
    updateOrderDto: UpdateOrderDto,
    user: User,
  ): Promise<Order> {
    const order = await this.findOne(id, user);

    Object.assign(order, updateOrderDto);
    return this.ordersRepository.save(order);
  }

  async updateItemStatus(
    orderId: string,
    itemId: string,
    status: 'PENDING' | 'IN_PREPARATION' | 'READY' | 'CANCELLED',
    user: User,
  ): Promise<OrderItem> {
    const order = await this.findOne(orderId, user);

    const item = await this.orderItemsRepository.findOne({
      where: { id: itemId, orderId },
    });

    if (!item) {
      throw new NotFoundException(`Order item with ID ${itemId} not found`);
    }

    item.itemStatus = status;
    return this.orderItemsRepository.save(item);
  }

  private async checkRestaurantAccess(
    restaurantId: string,
    user: User,
  ): Promise<void> {
    if (user.role === UserRole.SUPER_ADMIN) {
      return;
    }

    if (user.restaurantId !== restaurantId) {
      throw new ForbiddenException(
        'You do not have access to this restaurant',
      );
    }
  }
}

