import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Restaurant } from './entities/restaurant.entity';
import { Table } from './entities/table.entity';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';
import { ProductVariant } from './entities/product-variant.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Payment } from './entities/payment.entity';
import { Attendance } from './entities/attendance.entity';
import { TableAssignment } from './entities/table-assignment.entity';
import { Invoice } from './entities/invoice.entity';
import { Transaction } from './entities/transaction.entity';
import { AuthModule } from './auth/auth.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { TablesModule } from './tables/tables.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { KitchenModule } from './kitchen/kitchen.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PublicModule } from './public/public.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TableAssignmentsModule } from './table-assignments/table-assignments.module';
import { AccountingModule } from './accounting/accounting.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || '',
      database: process.env.DATABASE_NAME || 'keepfood',
      entities: [
        User,
        Restaurant,
        Table,
        Category,
        Product,
        ProductImage,
        ProductVariant,
        Order,
        OrderItem,
        Payment,
        Attendance,
        TableAssignment,
        Invoice,
        Transaction,
      ],
      synchronize: process.env.NODE_ENV !== 'production', // Only in development
      logging: process.env.NODE_ENV === 'development',
    }),
    AuthModule,
    RestaurantsModule,
    TablesModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    KitchenModule,
    StatisticsModule,
    PublicModule,
    AttendanceModule,
    TableAssignmentsModule,
    AccountingModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

