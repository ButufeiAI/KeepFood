import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, Between } from 'typeorm';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { Attendance } from '../entities/attendance.entity';
import { UserRole } from '../common/enums/role.enum';

export interface EmployeeSalesStats {
  employeeId: string;
  employeeName: string;
  date: Date;
  orderCount: number;
  totalSales: number;
  averageOrderValue: number;
}

export interface EmployeePresenceStatus {
  employeeId: string;
  employeeName: string;
  role: UserRole;
  isPresent: boolean;
  checkInTime?: Date;
  checkOutTime?: Date;
  totalMinutesToday?: number;
  lastAttendanceId?: string;
}

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Attendance)
    private attendanceRepository: Repository<Attendance>,
  ) {}

  /**
   * Récupère tous les employés d'un restaurant (exclut les clients)
   */
  async findAllEmployees(restaurantId: string): Promise<User[]> {
    return this.usersRepository.find({
      where: {
        restaurantId,
        role: In([
          UserRole.ADMIN_RESTAURANT,
          UserRole.MANAGER,
          UserRole.SERVEUR,
          UserRole.CUISINE,
          UserRole.BAR,
          UserRole.LIVREUR,
          UserRole.CAISSIER,
          UserRole.STOCK,
        ]),
        isActive: true,
      },
      order: { lastName: 'ASC', firstName: 'ASC' },
    });
  }

  /**
   * Récupère le statut de présence actuel de tous les employés
   */
  async getEmployeePresenceStatus(restaurantId: string): Promise<EmployeePresenceStatus[]> {
    const employees = await this.findAllEmployees(restaurantId);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const presenceStatuses: EmployeePresenceStatus[] = [];

    for (const employee of employees) {
      // Récupérer le pointage du jour
      const attendance = await this.attendanceRepository.findOne({
        where: {
          userId: employee.id,
          restaurantId,
          date: today,
        },
        order: { createdAt: 'DESC' },
      });

      const isPresent = attendance && attendance.checkIn && !attendance.checkOut;
      let totalMinutesToday = 0;

      if (attendance && attendance.checkIn) {
        if (attendance.checkOut) {
          totalMinutesToday = attendance.totalMinutes || 0;
        } else {
          // Calculer les minutes jusqu'à maintenant
          const now = new Date();
          const diffMs = now.getTime() - attendance.checkIn.getTime();
          totalMinutesToday = Math.floor(diffMs / 60000);
        }
      }

      presenceStatuses.push({
        employeeId: employee.id,
        employeeName: `${employee.firstName} ${employee.lastName}`,
        role: employee.role,
        isPresent: !!isPresent,
        checkInTime: attendance?.checkIn || undefined,
        checkOutTime: attendance?.checkOut || undefined,
        totalMinutesToday: totalMinutesToday > 0 ? totalMinutesToday : undefined,
        lastAttendanceId: attendance?.id || undefined,
      });
    }

    return presenceStatuses;
  }

  /**
   * Récupère les statistiques de vente d'un employé pour une date donnée
   */
  async getEmployeeSalesByDate(
    restaurantId: string,
    employeeId: string,
    date: Date,
  ): Promise<EmployeeSalesStats | null> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const orders = await this.ordersRepository.find({
      where: {
        restaurantId,
        serverId: employeeId,
        createdAt: Between(startOfDay, endOfDay),
        isPaid: true,
      },
    });

    if (orders.length === 0) {
      const employee = await this.usersRepository.findOne({ where: { id: employeeId } });
      if (!employee) return null;

      return {
        employeeId,
        employeeName: `${employee.firstName} ${employee.lastName}`,
        date,
        orderCount: 0,
        totalSales: 0,
        averageOrderValue: 0,
      };
    }

    const totalSales = orders.reduce((sum, order) => sum + Number(order.totalAmount), 0);
    const averageOrderValue = totalSales / orders.length;

    const employee = await this.usersRepository.findOne({ where: { id: employeeId } });

    return {
      employeeId,
      employeeName: employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown',
      date,
      orderCount: orders.length,
      totalSales,
      averageOrderValue,
    };
  }

  /**
   * Récupère les statistiques de vente de tous les employés pour une période
   */
  async getAllEmployeesSalesByPeriod(
    restaurantId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<EmployeeSalesStats[]> {
    const employees = await this.findAllEmployees(restaurantId);
    const stats: EmployeeSalesStats[] = [];

    for (const employee of employees) {
      // Récupérer toutes les commandes de cet employé dans la période
      const orders = await this.ordersRepository.find({
        where: {
          restaurantId,
          serverId: employee.id,
          createdAt: Between(startDate, endDate),
          isPaid: true,
        },
      });

      if (orders.length > 0) {
        const totalSales = orders.reduce((sum, order) => sum + Number(order.totalAmount), 0);
        const averageOrderValue = totalSales / orders.length;

        stats.push({
          employeeId: employee.id,
          employeeName: `${employee.firstName} ${employee.lastName}`,
          date: startDate, // Date de début de la période
          orderCount: orders.length,
          totalSales,
          averageOrderValue,
        });
      }
    }

    return stats;
  }

  /**
   * Récupère les ventes détaillées d'un employé par jour sur une période
   */
  async getEmployeeDailySales(
    restaurantId: string,
    employeeId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<EmployeeSalesStats[]> {
    const dailyStats: EmployeeSalesStats[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const stats = await this.getEmployeeSalesByDate(restaurantId, employeeId, new Date(currentDate));
      if (stats && stats.orderCount > 0) {
        dailyStats.push(stats);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dailyStats;
  }
}

