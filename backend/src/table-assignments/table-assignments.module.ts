import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableAssignmentsController } from './table-assignments.controller';
import { TableAssignmentsService } from './table-assignments.service';
import { TableAssignment } from '../entities/table-assignment.entity';
import { Table } from '../entities/table.entity';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableAssignment, Table, User])],
  controllers: [TableAssignmentsController],
  providers: [TableAssignmentsService],
  exports: [TableAssignmentsService],
})
export class TableAssignmentsModule {}

