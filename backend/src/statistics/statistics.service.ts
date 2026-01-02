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
    try {
      // Vérifier les permissions
      if (user.role !== UserRole.SUPER_ADMIN && user.restaurantId !== restaurantId) {
        throw new ForbiddenException('Access denied');
      }

      if (!restaurantId) {
        throw new BadRequestException('Restaurant ID is required');
      }

      // Vérifier que le restaurant existe
      const restaurant = await this.restaurantsRepository.findOne({
        where: { id: restaurantId }
      });

      if (!restaurant) {
        throw new BadRequestException('Restaurant not found');
      }

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);

    // Revenus - Requête optimisée combinant toutes les périodes
    const revenueQuery = this.ordersRepository
      .createQueryBuilder('order')
      .select('COALESCE(SUM(CASE WHEN order.isPaid = true THEN order.totalAmount ELSE 0 END), 0)', 'total')
      .addSelect('COALESCE(SUM(CASE WHEN order.isPaid = true AND order.createdAt >= :today THEN order.totalAmount ELSE 0 END), 0)', 'today')
      .addSelect('COALESCE(SUM(CASE WHEN order.isPaid = true AND order.createdAt >= :weekAgo THEN order.totalAmount ELSE 0 END), 0)', 'week')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .setParameters({ today, weekAgo });

    const revenueData = await revenueQuery.getRawOne();
    const totalRevenue = { total: revenueData?.total || '0' };
    const todayRevenue = { total: revenueData?.today || '0' };
    const weekRevenue = { total: revenueData?.week || '0' };

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
      .addSelect('SUM(item.quantity)', 'total')
      .innerJoin('item.order', 'order')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = :isPaid', { isPaid: true })
      .groupBy('item.productId')
      .orderBy('total', 'DESC')
      .limit(5)
      .getRawMany();

    const productIds = topProducts.map((p) => p.productId);
    
    let products = [];
    if (productIds.length > 0) {
      products = await this.productsRepository
        .createQueryBuilder('product')
        .where('product.id IN (:...ids)', { ids: productIds })
        .getMany();
    }

    const topProductsWithNames = topProducts.map((tp) => {
      const product = products.find((p) => p.id === tp.productId);
      return {
        productId: tp.productId,
        name: product?.name || 'Produit inconnu',
        quantity: parseInt(tp.total || '0'),
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
    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      throw new BadRequestException('Error fetching dashboard statistics: ' + error.message);
    }
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

  async getEmployeeStats(
    restaurantId: string,
    employeeId: string,
    startDate?: Date,
    endDate?: Date,
  ) {
    const where: any = {
      restaurantId,
      serverId: employeeId,
      isPaid: true,
    };

    if (startDate && endDate) {
      where.createdAt = Between(startDate, endDate);
    } else if (startDate) {
      where.createdAt = MoreThanOrEqual(startDate);
    }

    // Total des commandes
    const totalOrders = await this.ordersRepository.count({ where });

    // Revenu total
    const revenueResult = await this.ordersRepository
      .createQueryBuilder('order')
      .select('SUM(order.totalAmount)', 'total')
      .where(where)
      .getRawOne();
    const totalRevenue = parseFloat(revenueResult?.total || '0');

    // Nombre moyen d'articles par commande
    const avgItemsResult = await this.orderItemsRepository
      .createQueryBuilder('orderItem')
      .select('AVG(orderItem.quantity)', 'avg')
      .leftJoin('orderItem.order', 'order')
      .where('order.serverId = :employeeId', { employeeId })
      .andWhere('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = true')
      .getRawOne();
    const avgItemsPerOrder = parseFloat(avgItemsResult?.avg || '0');

    // Montant moyen par commande
    const avgOrderAmount = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    // Produits les plus vendus par cet employé
    const topProducts = await this.orderItemsRepository
      .createQueryBuilder('orderItem')
      .select('product.name', 'name')
      .addSelect('SUM(orderItem.quantity)', '"totalQuantity"')
      .addSelect('SUM(orderItem.price * orderItem.quantity)', 'revenue')
      .leftJoin('orderItem.product', 'product')
      .leftJoin('orderItem.order', 'order')
      .where('order.serverId = :employeeId', { employeeId })
      .andWhere('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = true')
      .groupBy('product.id')
      .addGroupBy('product.name')
      .orderBy('"totalQuantity"', 'DESC')
      .limit(5)
      .getRawMany();

    return {
      employeeId,
      totalOrders,
      totalRevenue: Math.round(totalRevenue * 100) / 100,
      avgOrderAmount: Math.round(avgOrderAmount * 100) / 100,
      avgItemsPerOrder: Math.round(avgItemsPerOrder * 10) / 10,
      topProducts: topProducts.map((p) => ({
        name: p.name,
        quantity: parseInt(p.totalQuantity || '0'),
        revenue: Math.round(parseFloat(p.revenue || '0') * 100) / 100,
      })),
    };
  }

  async getAllEmployeesStats(
    restaurantId: string,
    period: 'day' | 'week' | 'month' | 'year' = 'month',
  ) {
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case 'day':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case 'week':
        startDate = new Date(now);
        startDate.setDate(startDate.getDate() - 7);
        break;
      case 'month':
        startDate = new Date(now);
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case 'year':
        startDate = new Date(now);
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
      default:
        startDate = new Date(0);
    }

    const employeeStats = await this.ordersRepository
      .createQueryBuilder('order')
      .select('order.serverId', 'serverId')
      .addSelect('user.firstName', 'firstName')
      .addSelect('user.lastName', 'lastName')
      .addSelect('user.role', 'role')
      .addSelect('COUNT(order.id)', 'orderCount')
      .addSelect('COALESCE(SUM(order.totalAmount), 0)', 'totalRevenue')
      .addSelect('COALESCE(AVG(order.totalAmount), 0)', 'avgOrderAmount')
      .leftJoin('order.server', 'user')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = true')
      .andWhere('order.serverId IS NOT NULL')
      .andWhere('order.createdAt >= :startDate', { startDate })
      .groupBy('order.serverId')
      .addGroupBy('user.firstName')
      .addGroupBy('user.lastName')
      .addGroupBy('user.role')
      .orderBy('totalRevenue', 'DESC')
      .getRawMany();

    return employeeStats.map((stat) => ({
      serverId: stat.serverId,
      serverName: `${stat.firstName || ''} ${stat.lastName || ''}`.trim() || 'Serveur inconnu',
      role: stat.role || 'SERVER',
      orderCount: parseInt(stat.orderCount || '0'),
      totalRevenue: Math.round(parseFloat(stat.totalRevenue || '0') * 100) / 100,
      avgOrderAmount: Math.round(parseFloat(stat.avgOrderAmount || '0') * 100) / 100,
    }));
  }

  async getRestaurantEvolution(
    restaurantId: string,
    period: 'week' | 'month' | 'year' = 'month',
    metric: 'revenue' | 'orders' | 'avg' = 'revenue',
  ) {
    const now = new Date();
    let startDate: Date;
    let groupByFormat: string;
    let dateLabels: string[];

    switch (period) {
      case 'week':
        startDate = new Date(now);
        startDate.setDate(startDate.getDate() - 7);
        groupByFormat = 'YYYY-MM-DD';
        dateLabels = [];
        for (let i = 6; i >= 0; i--) {
          const d = new Date(now);
          d.setDate(d.getDate() - i);
          dateLabels.push(d.toISOString().split('T')[0]);
        }
        break;
      case 'month':
        startDate = new Date(now);
        startDate.setMonth(startDate.getMonth() - 1);
        groupByFormat = 'YYYY-MM-DD';
        dateLabels = [];
        for (let i = 29; i >= 0; i--) {
          const d = new Date(now);
          d.setDate(d.getDate() - i);
          dateLabels.push(d.toISOString().split('T')[0]);
        }
        break;
      case 'year':
        startDate = new Date(now);
        startDate.setFullYear(startDate.getFullYear() - 1);
        groupByFormat = 'YYYY-MM';
        dateLabels = [];
        for (let i = 11; i >= 0; i--) {
          const d = new Date(now);
          d.setMonth(d.getMonth() - i);
          dateLabels.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
        }
        break;
      default:
        startDate = new Date(now);
        startDate.setMonth(startDate.getMonth() - 1);
        groupByFormat = 'YYYY-MM-DD';
        dateLabels = [];
    }

    const queryBuilder = this.ordersRepository
      .createQueryBuilder('order')
      .select(`TO_CHAR(order.createdAt, '${groupByFormat}')`, 'date')
      .where('order.restaurantId = :restaurantId', { restaurantId })
      .andWhere('order.isPaid = true')
      .andWhere('order.createdAt >= :startDate', { startDate })
      .groupBy('date')
      .orderBy('date', 'ASC');

    if (metric === 'revenue') {
      queryBuilder.addSelect('COALESCE(SUM(order.totalAmount), 0)', 'value');
    } else if (metric === 'orders') {
      queryBuilder.addSelect('COUNT(order.id)', 'value');
    } else {
      queryBuilder.addSelect('COALESCE(AVG(order.totalAmount), 0)', 'value');
    }

    const results = await queryBuilder.getRawMany();

    const dataMap = new Map(results.map((r) => [r.date, parseFloat(r.value || '0')]));

    return dateLabels.map((label) => ({
      date: label,
      value: Math.round((dataMap.get(label) || 0) * 100) / 100,
    }));
  }
}

