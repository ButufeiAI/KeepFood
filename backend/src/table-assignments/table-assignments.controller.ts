import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TableAssignmentsService } from './table-assignments.service';
import { CreateTableAssignmentDto } from './dto/create-table-assignment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('table-assignments')
@UseGuards(JwtAuthGuard)
export class TableAssignmentsController {
  constructor(private readonly tableAssignmentsService: TableAssignmentsService) {}

  @Post('restaurant/:restaurantId')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.CREATED)
  async assignTables(
    @Param('restaurantId') restaurantId: string,
    @Body() createDto: CreateTableAssignmentDto,
    @CurrentUser() user: User,
  ) {
    return this.tableAssignmentsService.assignTables(createDto, restaurantId, user);
  }

  @Get('server/:userId/tables')
  async getServerTables(
    @Param('userId') userId: string,
    @Query('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
  ) {
    return this.tableAssignmentsService.getServerTables(userId, restaurantId, user);
  }

  @Get('table/:tableId/servers')
  async getTableServers(
    @Param('tableId') tableId: string,
    @Query('restaurantId') restaurantId: string,
    @CurrentUser() user: User,
  ) {
    return this.tableAssignmentsService.getTableServers(tableId, restaurantId, user);
  }

  @Get('restaurant/:restaurantId/all')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  async getAllAssignments(@Param('restaurantId') restaurantId: string, @CurrentUser() user: User) {
    return this.tableAssignmentsService.getAllAssignments(restaurantId, user);
  }

  @Delete('unassign')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  @UseGuards(RolesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async unassignTables(
    @Body() body: { userId: string; tableIds: string[]; restaurantId: string },
    @CurrentUser() user: User,
  ) {
    await this.tableAssignmentsService.unassignTables(body.userId, body.tableIds, body.restaurantId, user);
  }
}

