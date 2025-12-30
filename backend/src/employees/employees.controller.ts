import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { AssignTablesDto } from './dto/assign-tables.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';

@Controller('employees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async create(@Body() createEmployeeDto: CreateEmployeeDto, @Request() req) {
    return this.employeesService.create(createEmployeeDto, req.user.restaurantId);
  }

  @Get()
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async findAll(@Query('role') role: string, @Request() req) {
    return this.employeesService.findAll(req.user.restaurantId, role);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Put(':id')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async update(@Param('id') id: string, @Body() updateEmployeeDto: Partial<CreateEmployeeDto>) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN)
  async remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }

  @Patch(':id/status')
  @Roles(UserRole.ADMIN_RESTAURANT, UserRole.SUPER_ADMIN, UserRole.MANAGER)
  async updateStatus(@Param('id') id: string, @Body('isActive') isActive: boolean) {
    return this.employeesService.updateStatus(id, isActive);
  }
}
