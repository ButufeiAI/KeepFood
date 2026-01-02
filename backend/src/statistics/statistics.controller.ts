import { Controller, Get, Query, UseGuards, BadRequestException } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('statistics')
@UseGuards(JwtAuthGuard)
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('dashboard')
  async getDashboardStats(
    @Query('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
  ) {
    try {
      console.log('Dashboard stats requested by:', user.email, 'role:', user.role, 'userRestaurantId:', user.restaurantId, 'queryRestaurantId:', restaurantId);
      
      const userRestaurantId = user.restaurantId || restaurantId;

      // Super admin peut voir n'importe quel restaurant
      if (user.role === UserRole.SUPER_ADMIN && restaurantId) {
        return this.statisticsService.getDashboardStats(restaurantId, user);
      }

      // Si super admin sans restaurantId spécifique, on retourne les stats globales
      if (user.role === UserRole.SUPER_ADMIN && !restaurantId) {
        return this.statisticsService.getSuperAdminStats();
      }

      // Pour les autres rôles, le restaurantId est obligatoire
      if (!userRestaurantId) {
        console.error('No restaurant ID found for user:', user.email);
        throw new BadRequestException('Restaurant ID is required. Please ensure your user account is linked to a restaurant.');
      }

      return this.statisticsService.getDashboardStats(userRestaurantId, user);
    } catch (error) {
      console.error('Error in getDashboardStats:', error);
      throw error;
    }
  }

  @Get('super-admin')
  @Roles(UserRole.SUPER_ADMIN)
  @UseGuards(RolesGuard)
  async getSuperAdminStats() {
    return this.statisticsService.getSuperAdminStats();
  }

  // ========== STATISTIQUES AVANCÉES ==========

  @Get('top-products')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getTopProducts(
    @Query('restaurantId') restaurantId: string,
    @Query('limit') limit: string,
    @Query('period') period: 'day' | 'week' | 'month',
    @CurrentUser() user: User,
  ) {
    return this.statisticsService.getTopProducts(
      restaurantId || user.restaurantId,
      user,
      limit ? parseInt(limit) : 10,
      period,
    );
  }

  @Get('least-sold-products')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getLeastSoldProducts(
    @Query('restaurantId') restaurantId: string,
    @Query('limit') limit: string,
    @Query('period') period: 'day' | 'week' | 'month',
    @CurrentUser() user: User,
  ) {
    return this.statisticsService.getLeastSoldProducts(
      restaurantId || user.restaurantId,
      user,
      limit ? parseInt(limit) : 10,
      period,
    );
  }

  @Get('average-preparation-time')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getAveragePreparationTime(
    @Query('restaurantId') restaurantId: string,
    @Query('period') period: 'day' | 'week' | 'month',
    @CurrentUser() user: User,
  ) {
    return this.statisticsService.getAveragePreparationTime(
      restaurantId || user.restaurantId,
      user,
      period,
    );
  }

  @Get('payment-distribution')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getPaymentDistribution(
    @Query('restaurantId') restaurantId: string,
    @Query('period') period: 'day' | 'week' | 'month',
    @CurrentUser() user: User,
  ) {
    return this.statisticsService.getPaymentDistribution(
      restaurantId || user.restaurantId,
      user,
      period,
    );
  }

  @Get('server-performance')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getServerPerformance(
    @Query('restaurantId') restaurantId: string,
    @Query('period') period: 'day' | 'week' | 'month',
    @CurrentUser() user: User,
  ) {
    return this.statisticsService.getServerPerformance(
      restaurantId || user.restaurantId,
      user,
      period,
    );
  }

  @Get('employee')
  @UseGuards(RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getEmployeeStats(
    @Query('restaurantId') restaurantId: string,
    @Query('employeeId') employeeId: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @CurrentUser() user?: User,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.statisticsService.getEmployeeStats(
      restaurantId || user.restaurantId,
      employeeId,
      start,
      end,
    );
  }

  @Get('all-employees')
  @UseGuards(RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getAllEmployeesStats(
    @Query('restaurantId') restaurantId: string,
    @Query('period') period: 'day' | 'week' | 'month' | 'year',
    @CurrentUser() user?: User,
  ) {
    return this.statisticsService.getAllEmployeesStats(
      restaurantId || user.restaurantId,
      period || 'month',
    );
  }

  @Get('restaurant-evolution')
  @UseGuards(RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getRestaurantEvolution(
    @Query('restaurantId') restaurantId: string,
    @Query('period') period: 'week' | 'month' | 'year',
    @Query('metric') metric: 'revenue' | 'orders' | 'avg',
    @CurrentUser() user?: User,
  ) {
    return this.statisticsService.getRestaurantEvolution(
      restaurantId || user.restaurantId,
      period || 'month',
      metric || 'revenue',
    );
  }
}



