import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketingController } from './marketing.controller';
import { MarketingService } from './marketing.service';
import { PromoCode } from '../entities/promo-code.entity';
import { PromoCodeUsage } from '../entities/promo-code-usage.entity';
import { Order } from '../entities/order.entity';
import { Client } from '../entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PromoCode, PromoCodeUsage, Order, Client]),
  ],
  controllers: [MarketingController],
  providers: [MarketingService],
  exports: [MarketingService],
})
export class MarketingModule {}
