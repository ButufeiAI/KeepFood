import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TableAssignmentsController } from './table-assignments.controller';
import { User } from '../entities/user.entity';
import { EmployeeProfile } from '../entities/employee-profile.entity';
import { TableAssignment } from '../entities/table-assignment.entity';
import { Table } from '../entities/table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      EmployeeProfile,
      TableAssignment,
      Table,
    ]),
  ],
  controllers: [EmployeesController, TableAssignmentsController],
  providers: [EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
