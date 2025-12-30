import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { EmployeesService } from '../employees/employees.service';
import { AssignTablesDto } from '../employees/dto/assign-tables.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';

@Controller('table-assignments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TableAssignmentsController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async assignTables(@Body() assignTablesDto: AssignTablesDto, @Request() req) {
    return this.employeesService.assignTables(assignTablesDto, req.user.restaurantId);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async unassignTable(@Param('id') id: string) {
    return this.employeesService.unassignTable(id);
  }

  @Post('auto-assign')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async autoAssignTables(@Request() req) {
    return this.employeesService.autoAssignTables(req.user.restaurantId);
  }

  @Delete('clear-all')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN)
  async clearAllAssignments(@Request() req) {
    return this.employeesService.clearAllAssignments(req.user.restaurantId);
  }
}

