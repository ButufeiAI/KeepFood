import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { User } from '../entities/user.entity';
import { Order } from '../entities/order.entity';
import { Attendance } from '../entities/attendance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order, Attendance])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}

