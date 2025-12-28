import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('attendance')
@UseGuards(JwtAuthGuard)
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('check-in/:userId')
  @HttpCode(HttpStatus.OK)
  async checkIn(@Param('userId') userId: string, @CurrentUser() user: User) {
    return this.attendanceService.checkIn(userId, user);
  }

  @Post('check-out/:userId')
  @HttpCode(HttpStatus.OK)
  async checkOut(@Param('userId') userId: string, @CurrentUser() user: User) {
    return this.attendanceService.checkOut(userId, user);
  }

  @Get('my-attendance')
  async getMyAttendance(
    @CurrentUser() user: User,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.attendanceService.getMyAttendance(user.id, start, end);
  }

  @Get('today-status')
  async getTodayStatus(@CurrentUser() user: User) {
    return this.attendanceService.getTodayStatus(user.id);
  }

  @Get('restaurant/:restaurantId')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  async getRestaurantAttendance(
    @Param('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate ? new Date(startDate) : undefined;
    const end = endDate ? new Date(endDate) : undefined;
    return this.attendanceService.getRestaurantAttendance(restaurantId, user, start, end);
  }

  @Post('approve/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  async approveAttendance(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body('notes') notes?: string,
  ) {
    return this.attendanceService.approveAttendance(id, user, notes);
  }

  @Post('reject/:id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  async rejectAttendance(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body('rejectionReason') rejectionReason: string,
  ) {
    return this.attendanceService.rejectAttendance(id, user, rejectionReason);
  }

  @Get('pending-approvals')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  async getPendingApprovals(
    @Query('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
  ) {
    return this.attendanceService.getPendingApprovals(restaurantId, user);
  }
}

