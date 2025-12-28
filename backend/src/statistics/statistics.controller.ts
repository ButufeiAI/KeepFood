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
      const userRestaurantId = user.restaurantId || restaurantId;

      if (user.role === UserRole.SUPER_ADMIN && restaurantId) {
        return this.statisticsService.getDashboardStats(restaurantId, user);
      }

      if (!userRestaurantId) {
        throw new BadRequestException('Restaurant ID is required');
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
}



