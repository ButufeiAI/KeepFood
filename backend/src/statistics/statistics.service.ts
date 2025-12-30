import { Injectable, ForbiddenException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual, In } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { Restaurant } from '../entities/restaurant.entity';
import { Table } from '../entities/table.entity';
import { User } from '../entities/user.entity';
import { Payment } from '../entities/payment.entity';
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
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
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

  // ========== STATISTIQUES AVANCÉES ==========

  async getTopProducts(restaurantId: string, user: any, limit: number = 10, period?: 'day' | 'week' | 'month') {
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (period === 'week') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === 'month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else {
      startDate = new Date(0); // Toutes les données
    }

    const topProducts = await this.orderItemsRepository
      .createQueryBuilder('item')
      .select('item.productId', 'productId')
      .addSelect('SUM(item.quantity)', 'totalQuantity')
      .addSelect('SUM(item.totalPrice)', 'totalRevenue')
      .innerJoin('item.order', 'order')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .andWhere('order.createdAt >= :startDate', { startDate })
      .groupBy('item.productId')
      .orderBy('totalQuantity', 'DESC')
      .limit(limit)
      .getRawMany();

    const productIds = topProducts.map((p) => p.productId);
    const products = await this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('product.id IN (:...ids)', { ids: productIds })
      .getMany();

    return topProducts.map((tp) => {
      const product = products.find((p) => p.id === tp.productId);
      return {
        productId: tp.productId,
        name: product?.name || 'Produit inconnu',
        quantity: parseInt(tp.totalQuantity),
        revenue: parseFloat(tp.totalRevenue || '0'),
        category: product?.category?.name || 'Sans catégorie',
      };
    });
  }

  async getLeastSoldProducts(restaurantId: string, user: any, limit: number = 10, period?: 'day' | 'week' | 'month') {
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (period === 'week') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === 'month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else {
      startDate = new Date(0); // Toutes les données
    }

    // Récupérer tous les produits du restaurant
    const allProducts = await this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('category.restaurantId = :restaurantId', { restaurantId })
      .andWhere('product.isActive = :isActive', { isActive: true })
      .getMany();

    // Récupérer les quantités vendues pour chaque produit
    const soldProducts = await this.orderItemsRepository
      .createQueryBuilder('item')
      .select('item.productId', 'productId')
      .addSelect('SUM(item.quantity)', 'totalQuantity')
      .innerJoin('item.order', 'order')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .andWhere('order.createdAt >= :startDate', { startDate })
      .groupBy('item.productId')
      .getRawMany();

    const soldMap = new Map(soldProducts.map((sp) => [sp.productId, parseInt(sp.totalQuantity)]));

    // Calculer les produits peu vendus (0 ou faible quantité)
    const leastSold = allProducts
      .map((product) => ({
        productId: product.id,
        name: product.name,
        quantity: soldMap.get(product.id) || 0,
        category: product.category?.name || 'Sans catégorie',
      }))
      .sort((a, b) => a.quantity - b.quantity)
      .slice(0, limit);

    return leastSold;
  }

  async getAveragePreparationTime(restaurantId: string, user: any, period?: 'day' | 'week' | 'month') {
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (period === 'week') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === 'month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else {
      startDate = new Date(0); // Toutes les données
    }

    // Récupérer les commandes avec statut READY ou COMPLETED qui ont un createdAt et updatedAt
    const orders = await this.ordersRepository.find({
      where: {
        restaurantId,
        status: Between(OrderStatus.READY, OrderStatus.PAID),
        createdAt: MoreThanOrEqual(startDate),
      },
    });

    if (orders.length === 0) {
      return {
        averageMinutes: 0,
        totalOrders: 0,
        minMinutes: 0,
        maxMinutes: 0,
      };
    }

    const preparationTimes = orders
      .map((order) => {
        const createdAt = new Date(order.createdAt).getTime();
        const updatedAt = new Date(order.updatedAt).getTime();
        return (updatedAt - createdAt) / (1000 * 60); // En minutes
      })
      .filter((time) => time > 0 && time < 1440); // Filtrer les valeurs aberrantes (max 24h)

    if (preparationTimes.length === 0) {
      return {
        averageMinutes: 0,
        totalOrders: 0,
        minMinutes: 0,
        maxMinutes: 0,
      };
    }

    const average = preparationTimes.reduce((a, b) => a + b, 0) / preparationTimes.length;
    const min = Math.min(...preparationTimes);
    const max = Math.max(...preparationTimes);

    return {
      averageMinutes: Math.round(average * 10) / 10,
      totalOrders: preparationTimes.length,
      minMinutes: Math.round(min * 10) / 10,
      maxMinutes: Math.round(max * 10) / 10,
    };
  }

  async getPaymentDistribution(restaurantId: string, user: any, period?: 'day' | 'week' | 'month') {
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (period === 'week') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === 'month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else {
      startDate = new Date(0); // Toutes les données
    }

    const payments = await this.paymentsRepository
      .createQueryBuilder('payment')
      .select('payment.paymentMethod', 'method')
      .addSelect('COUNT(*)', 'count')
      .addSelect('SUM(payment.amount)', 'total')
      .where('payment.restaurantId = :restaurantId', { restaurantId })
      .andWhere('payment.status = :status', { status: 'SUCCESS' })
      .andWhere('payment.createdAt >= :startDate', { startDate })
      .groupBy('payment.paymentMethod')
      .getRawMany();

    const total = payments.reduce((sum, p) => sum + parseFloat(p.total || '0'), 0);

    return payments.map((p) => ({
      method: p.method,
      count: parseInt(p.count),
      amount: parseFloat(p.total || '0'),
      percentage: total > 0 ? Math.round((parseFloat(p.total || '0') / total) * 100 * 10) / 10 : 0,
    }));
  }

  async getServerPerformance(restaurantId: string, user: any, period?: 'day' | 'week' | 'month') {
    if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
      throw new ForbiddenException('Access denied');
    }

    const now = new Date();
    let startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (period === 'week') {
      startDate.setDate(startDate.getDate() - 7);
    } else if (period === 'month') {
      startDate.setMonth(startDate.getMonth() - 1);
    } else {
      startDate = new Date(0); // Toutes les données
    }

    const serverStats = await this.ordersRepository
      .createQueryBuilder('order')
      .select('order.serverId', 'serverId')
      .addSelect('COUNT(*)', 'orderCount')
      .addSelect('SUM(order.totalAmount)', 'totalRevenue')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .andWhere('order.serverId IS NOT NULL')
      .andWhere('order.createdAt >= :startDate', { startDate })
      .groupBy('order.serverId')
      .orderBy('totalRevenue', 'DESC')
      .getRawMany();

    const serverIds = serverStats.map((s) => s.serverId).filter((id) => id);
    const servers = serverIds.length > 0
      ? await this.usersRepository.find({
          where: { id: In(serverIds) },
        })
      : [];

    return serverStats.map((stat) => {
      const server = servers.find((s) => s.id === stat.serverId);
      return {
        serverId: stat.serverId,
        serverName: server ? `${server.firstName} ${server.lastName}` : 'Serveur inconnu',
        orderCount: parseInt(stat.orderCount),
        totalRevenue: parseFloat(stat.totalRevenue || '0'),
      };
    });
  }
}

