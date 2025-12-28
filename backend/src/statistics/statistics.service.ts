import { Injectable, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { Restaurant } from '../entities/restaurant.entity';
import { Table } from '../entities/table.entity';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import { OrderStatus } from '../common/enums/order-status.enum';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
    @InjectRepository(Table)
    private tablesRepository: Repository<Table>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getDashboardStats(restaurantId: string, user: any) {
    // Vérifier les permissions
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    if (!restaurantId) {
      throw new BadRequestException('Restaurant ID is required');
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    const monthAgo = new Date(today);
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    // Revenus
    const totalRevenue = await this.ordersRepository
      .createQueryBuilder('order')
      .select('COALESCE(SUM(order.totalAmount), 0)', 'total')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .getRawOne();

    const todayRevenue = await this.ordersRepository
      .createQueryBuilder('order')
      .select('COALESCE(SUM(order.totalAmount), 0)', 'total')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .andWhere('order.createdAt >= :today', { today })
      .getRawOne();

    const weekRevenue = await this.ordersRepository
      .createQueryBuilder('order')
      .select('COALESCE(SUM(order.totalAmount), 0)', 'total')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .andWhere('order.createdAt >= :weekAgo', { weekAgo })
      .getRawOne();

    // Commandes
    const totalOrders = await this.ordersRepository.count({
      where: { restaurantId },
    });

    const todayOrders = await this.ordersRepository.count({
      where: {
        restaurantId,
        createdAt: MoreThanOrEqual(today),
      },
    });

    const pendingOrders = await this.ordersRepository.count({
      where: {
        restaurantId,
        status: OrderStatus.PENDING,
      },
    });

    const activeOrders = await this.ordersRepository.count({
      where: {
        restaurantId,
        status: Between(OrderStatus.PENDING, OrderStatus.READY),
      },
    });

    // Produits (via catégories)
    const totalProducts = await this.productsRepository
      .createQueryBuilder('product')
      .innerJoin('product.category', 'category')
      .where('category.restaurantId = :restaurantId', { restaurantId })
      .getCount();

    const availableProducts = await this.productsRepository
      .createQueryBuilder('product')
      .innerJoin('product.category', 'category')
      .where('category.restaurantId = :restaurantId', { restaurantId })
      .andWhere('product.isAvailable = :isAvailable', { isAvailable: true })
      .getCount();

    // Tables
    const totalTables = await this.tablesRepository
      .createQueryBuilder('table')
      .where('table.restaurantId = :restaurantId', { restaurantId })
      .getCount();

    const availableTables = await this.tablesRepository
      .createQueryBuilder('table')
      .where('table.restaurantId = :restaurantId', { restaurantId })
      .andWhere('table.isActive = :isActive', { isActive: true })
      .getCount();

    // Produits les plus vendus
    const topProducts = await this.orderItemsRepository
      .createQueryBuilder('item')
      .select('item.productId', 'productId')
      .addSelect('SUM(item.quantity)', 'totalQuantity')
      .innerJoin('item.order', 'order')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .groupBy('item.productId')
      .orderBy('totalQuantity', 'DESC')
      .limit(5)
      .getRawMany();

    const productIds = topProducts.map((p) => p.productId);
    const products = await this.productsRepository
      .createQueryBuilder('product')
      .where('product.id IN (:...ids)', { ids: productIds })
      .getMany();

    const topProductsWithNames = topProducts.map((tp) => {
      const product = products.find((p) => p.id === tp.productId);
      return {
        productId: tp.productId,
        name: product?.name || 'Produit inconnu',
        quantity: parseInt(tp.totalQuantity),
      };
    });

    // Revenus par jour (7 derniers jours) - PostgreSQL syntax
    let revenueByDay = [];
    try {
      revenueByDay = await this.ordersRepository
        .createQueryBuilder('order')
        .select("DATE_TRUNC('day', order.createdAt)::date", 'date')
        .addSelect('COALESCE(SUM(order.totalAmount), 0)', 'revenue')
        .where('order.restaurantId = :restaurantId', { restaurantId })
        .andWhere('order.isPaid = :isPaid', { isPaid: true })
        .andWhere('order.createdAt >= :weekAgo', { weekAgo })
        .groupBy("DATE_TRUNC('day', order.createdAt)::date")
        .orderBy("DATE_TRUNC('day', order.createdAt)::date", 'ASC')
        .getRawMany();
    } catch (error) {
      console.error('Error fetching revenueByDay:', error);
      // Si DATE_TRUNC ne fonctionne pas, utiliser une approche alternative
      try {
        const allOrders = await this.ordersRepository.find({
          where: {
            restaurantId,
            isPaid: true,
            createdAt: MoreThanOrEqual(weekAgo),
          },
        });

        // Grouper manuellement par jour
        const revenueMap = new Map<string, number>();
        allOrders.forEach((order) => {
          const dateKey = order.createdAt.toISOString().split('T')[0];
          const currentRevenue = revenueMap.get(dateKey) || 0;
          revenueMap.set(dateKey, currentRevenue + Number(order.totalAmount));
        });

        revenueByDay = Array.from(revenueMap.entries()).map(([date, revenue]) => ({
          date,
          revenue: revenue.toString(),
        }));
      } catch (fallbackError) {
        console.error('Error in fallback revenueByDay:', fallbackError);
        revenueByDay = [];
      }
    }

    // Commandes par statut
    const ordersByStatus = await this.ordersRepository
      .createQueryBuilder('order')
      .select('order.status', 'status')
      .addSelect('COUNT(*)', 'count')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .groupBy('order.status')
      .getRawMany();

    return {
      revenue: {
        total: parseFloat(totalRevenue?.total || '0'),
        today: parseFloat(todayRevenue?.total || '0'),
        week: parseFloat(weekRevenue?.total || '0'),
      },
      orders: {
        total: totalOrders,
        today: todayOrders,
        pending: pendingOrders,
        active: activeOrders,
      },
      products: {
        total: totalProducts,
        available: availableProducts,
      },
      tables: {
        total: totalTables,
        available: availableTables,
      },
      topProducts: topProductsWithNames,
      revenueByDay,
      ordersByStatus,
    };
  }

  async getSuperAdminStats() {
    const totalRestaurants = await this.restaurantsRepository.count();
    const activeRestaurants = await this.restaurantsRepository.count({
      where: { isActive: true },
    });

    const totalUsers = await this.usersRepository.count();
    const totalOrders = await this.ordersRepository.count();

    const totalRevenue = await this.ordersRepository
      .createQueryBuilder('order')
      .select('COALESCE(SUM(order.totalAmount), 0)', 'total')
      .where('order.isPaid = :isPaid', { isPaid: true })
      .getRawOne();

    return {
      restaurants: {
        total: totalRestaurants,
        active: activeRestaurants,
      },
      users: {
        total: totalUsers,
      },
      orders: {
        total: totalOrders,
      },
      revenue: {
        total: parseFloat(totalRevenue?.total || '0'),
      },
    };
  }
}

