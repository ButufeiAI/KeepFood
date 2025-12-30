import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TableSessionsController } from './table-sessions.controller';
import { TableSessionsService } from './table-sessions.service';
import { TableSession } from '../entities/table-session.entity';
import { Order } from '../entities/order.entity';
import { Table } from '../entities/table.entity';
import { Restaurant } from '../entities/restaurant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableSession, Order, Table, Restaurant])],
  controllers: [TableSessionsController],
  providers: [TableSessionsService],
  exports: [TableSessionsService],
})
export class TableSessionsModule {}

