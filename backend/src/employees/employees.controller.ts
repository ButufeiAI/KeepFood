import { Controller, Get, Query, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';
import { EmployeesService } from './employees.service';

@Controller('employees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async findAllEmployees(@Query('restaurantId') restaurantId: string) {
    return this.employeesService.findAllEmployees(restaurantId);
  }

  @Get('presence')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getEmployeePresence(@Query('restaurantId') restaurantId: string) {
    return this.employeesService.getEmployeePresenceStatus(restaurantId);
  }

  @Get(':id/sales')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getEmployeeSales(
    @Param('id') id: string,
    @Query('restaurantId') restaurantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    if (startDate && endDate) {
      return this.employeesService.getEmployeeDailySales(
        restaurantId,
        id,
        new Date(startDate),
        new Date(endDate),
      );
    }
    return this.employeesService.getEmployeeSalesByDate(restaurantId, id, new Date());
  }

  @Get('sales/all')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async getAllEmployeesSales(
    @Query('restaurantId') restaurantId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.employeesService.getAllEmployeesSalesByPeriod(
      restaurantId,
      new Date(startDate),
      new Date(endDate),
    );
  }
}

