import { Controller, Post, Body, Get, Param, UseGuards, Headers, RawBodyRequest, Req, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../entities/user.entity';
import { UserRole } from '../common/enums/role.enum';
import { Request } from 'express';

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

  /**
   * Webhook Viva Wallet
   */
  @Post('webhook/viva-wallet')
  @HttpCode(HttpStatus.OK)
  async handleVivaWalletWebhook(
    @Body() payload: any,
    @Headers('x-vivawallet-signature') signature: string,
  ) {
    return this.paymentsService.handleVivaWalletWebhook(payload, signature);
  }

  /**
   * Webhook Stripe
   */
  @Post('webhook/stripe')
  @HttpCode(HttpStatus.OK)
  async handleStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    return this.paymentsService.handleStripeWebhook(req.rawBody, signature);
  }

  /**
   * Obtenir l'historique des paiements pour un restaurant
   */
  @Get('history')
  @UseGuards(JwtAuthGuard)
  async getPaymentHistory(
    @CurrentUser() user: User,
    @Query('restaurantId') restaurantId: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
  ) {
    return this.paymentsService.getPaymentHistory(restaurantId, user, limit, offset);
  }

  /**
   * Obtenir un paiement par ID
   */
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getPayment(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ) {
    return this.paymentsService.findOne(id, user);
  }

  /**
   * Rembourser un paiement
   */
  @Post(':id/refund')
  @UseGuards(JwtAuthGuard)
  async refundPayment(
    @Param('id') id: string,
    @Body() body: { amount?: number },
    @CurrentUser() user: User,
  ) {
    return this.paymentsService.refundPayment(id, user, body.amount);
  }
}

