import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicController } from './public.controller';
import { Restaurant } from '../entities/restaurant.entity';
import { Category } from '../entities/category.entity';
import { Product } from '../entities/product.entity';
import { Table } from '../entities/table.entity';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { ProductVariant } from '../entities/product-variant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Restaurant, Category, Product, Table, Order, OrderItem, ProductVariant]),
  ],
  controllers: [PublicController],
})
export class PublicModule {}

