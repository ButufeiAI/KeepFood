import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import { OrderStatus } from '../common/enums/order-status.enum';

@Injectable()
export class KitchenService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
  ) {}

  async getKitchenOrders(restaurantId: string, user: User): Promise<any[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    const orders = await this.ordersRepository.find({
      where: {
        restaurantId,
        status: In([
          OrderStatus.PENDING,
          OrderStatus.CONFIRMED,
          OrderStatus.IN_PREPARATION,
        ]),
      },
      relations: ['table', 'items', 'items.product', 'items.variant'],
      order: { createdAt: 'ASC' },
    });

    // Filtrer pour ne garder que les items de type FOOD et formater avec info commande
    const foodItems: any[] = [];
    for (const order of orders) {
      for (const item of order.items) {
        if (item.product.type === 'FOOD' && item.itemStatus !== 'CANCELLED') {
          foodItems.push({
            ...item,
            order: {
              id: order.id,
              table: order.table,
              createdAt: order.createdAt,
              notes: order.notes,
            },
          });
        }
      }
    }

    return foodItems;
  }

  async getBarOrders(restaurantId: string, user: User): Promise<any[]> {
    await this.checkRestaurantAccess(restaurantId, user);

    const orders = await this.ordersRepository.find({
      where: {
        restaurantId,
        status: In([
          OrderStatus.PENDING,
          OrderStatus.CONFIRMED,
          OrderStatus.IN_PREPARATION,
        ]),
      },
      relations: ['table', 'items', 'items.product', 'items.variant'],
      order: { createdAt: 'ASC' },
    });

    // Filtrer pour ne garder que les items de type DRINK et formater avec info commande
    const drinkItems: any[] = [];
    for (const order of orders) {
      for (const item of order.items) {
        if (item.product.type === 'DRINK' && item.itemStatus !== 'CANCELLED') {
          drinkItems.push({
            ...item,
            order: {
              id: order.id,
              table: order.table,
              createdAt: order.createdAt,
              notes: order.notes,
            },
          });
        }
      }
    }

    return drinkItems;
  }

  async updateItemStatus(
    itemId: string,
    status: 'PENDING' | 'IN_PREPARATION' | 'READY' | 'CANCELLED',
    user: User,
  ): Promise<OrderItem> {
    const item = await this.orderItemsRepository.findOne({
      where: { id: itemId },
      relations: ['order', 'order.restaurant'],
    });

    if (!item) {
      throw new NotFoundException(`Order item with ID ${itemId} not found`);
    }

    await this.checkRestaurantAccess(item.order.restaurantId, user);

    item.itemStatus = status;
    const savedItem = await this.orderItemsRepository.save(item);

    // Si tous les items sont READY, on peut mettre la commande en READY
    if (status === 'READY') {
      const order = await this.ordersRepository.findOne({
        where: { id: item.orderId },
        relations: ['items'],
      });

      if (order) {
        const allReady = order.items.every(
          (i) => i.itemStatus === 'READY' || i.itemStatus === 'CANCELLED',
        );

        if (allReady) {
          order.status = OrderStatus.READY;
          await this.ordersRepository.save(order);
        }
      }
    }

    return savedItem;
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

