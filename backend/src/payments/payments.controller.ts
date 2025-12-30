import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-intent')
  @UseGuards(JwtAuthGuard)
  async createPaymentIntent(
    @Body() body: { amount: number; restaurantId: string },
    @CurrentUser() user: User,
  ) {
    // Seul les clients peuvent créer des intentions de paiement
    if (user.role !== UserRole.CLIENT) {
      throw new Error('Only clients can create payment intents');
    }

    return this.paymentsService.createPaymentIntent(body.amount, body.restaurantId);
  }

  @Post('confirm-and-create-order')
  @UseGuards(JwtAuthGuard)
  async confirmPaymentAndCreateOrder(
    @Body() body: {
      restaurantId: string;
      orderType: 'TAKEAWAY' | 'DELIVERY';
      deliveryAddress?: string;
      items: Array<{
        productId: string;
        variantId?: string;
        quantity: number;
        notes?: string;
      }>;
      notes?: string;
      paymentIntentId: string;
    },
    @CurrentUser() user: User,
  ) {
    // Seul les clients peuvent créer des commandes en ligne
    if (user.role !== UserRole.CLIENT) {
      throw new Error('Only clients can create online orders');
    }

    return this.paymentsService.confirmPaymentAndCreateOrder({
      ...body,
      userId: user.id,
    });
  }
}

