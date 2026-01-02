import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../common/enums/role.enum';
import { ZoneAssignmentsService } from './zone-assignments.service';
import {
  CreateZoneAssignmentDto,
  UpdateZoneAssignmentDto,
  AssignMultipleEmployeesDto,
} from './zone-assignments.dto';

@Controller('zone-assignments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ZoneAssignmentsController {
  constructor(private readonly zoneAssignmentsService: ZoneAssignmentsService) {}

  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async findAll(@Query('restaurantId') restaurantId: string) {
    return this.zoneAssignmentsService.findAll(restaurantId);
  }

  @Get('zone/:zone')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async findByZone(
    @Param('zone') zone: string,
    @Query('restaurantId') restaurantId: string,
  ) {
    return this.zoneAssignmentsService.findByZone(restaurantId, zone);
  }

  @Get('employee/:employeeId')
  async findByEmployee(@Param('employeeId') employeeId: string) {
    return this.zoneAssignmentsService.findByEmployee(employeeId);
  }

  @Post()
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async create(@Body() createDto: CreateZoneAssignmentDto) {
    return this.zoneAssignmentsService.create(createDto);
  }

  @Post('assign-multiple')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async assignMultiple(@Body() assignDto: AssignMultipleEmployeesDto) {
    return this.zoneAssignmentsService.assignMultipleEmployeesToZone(
      assignDto.restaurantId,
      assignDto.zone,
      assignDto.employeeIds,
    );
  }

  @Put(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async update(@Param('id') id: string, @Body() updateDto: UpdateZoneAssignmentDto) {
    return this.zoneAssignmentsService.update(id, updateDto);
  }

  @Delete(':id')
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN_RESTAURANT, UserRole.MANAGER)
  async remove(@Param('id') id: string) {
    await this.zoneAssignmentsService.remove(id);
    return { message: 'Zone assignment deleted successfully' };
  }
}
