import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { Payment } from '../entities/payment.entity';
import { Order } from '../entities/order.entity';
import { OrderItem } from '../entities/order-item.entity';
import { Product } from '../entities/product.entity';
import { ProductVariant } from '../entities/product-variant.entity';
import { Restaurant } from '../entities/restaurant.entity';
import { LoyaltyModule } from '../loyalty/loyalty.module';
import { VivaWalletService } from './providers/viva-wallet.service';
import { StripeService } from './providers/stripe.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Payment,
      Order,
      OrderItem,
      Product,
      ProductVariant,
      Restaurant,
    ]),
    LoyaltyModule,
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, VivaWalletService, StripeService],
  exports: [PaymentsService],
})
export class PaymentsModule {}

