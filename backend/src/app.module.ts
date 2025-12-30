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
import { TableSession } from './entities/table-session.entity';
import { Client } from './entities/client.entity';
import { LoyaltyAccount } from './entities/loyalty-account.entity';
import { LoyaltyTransaction } from './entities/loyalty-transaction.entity';
import { LoyaltyReward } from './entities/loyalty-reward.entity';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionUsage } from './entities/subscription-usage.entity';
import { FavoriteProduct } from './entities/favorite-product.entity';
import { ClientNotification } from './entities/client-notification.entity';
import { EmployeeProfile } from './entities/employee-profile.entity';
import { ClientProfile } from './entities/client-profile.entity';
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
import { TableSessionsModule } from './table-sessions/table-sessions.module';
import { ClientsModule } from './clients/clients.module';
import { PaymentsModule } from './payments/payments.module';
import { LoyaltyModule } from './loyalty/loyalty.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { FavoritesModule } from './favorites/favorites.module';
import { NotificationsModule } from './notifications/notifications.module';

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
        TableSession,
        Client,
        LoyaltyAccount,
        LoyaltyTransaction,
        LoyaltyReward,
        Subscription,
        SubscriptionUsage,
        FavoriteProduct,
        ClientNotification,
        EmployeeProfile,
        ClientProfile,
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
    TableSessionsModule,
    ClientsModule,
    PaymentsModule,
    LoyaltyModule,
    SubscriptionsModule,
    FavoritesModule,
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

