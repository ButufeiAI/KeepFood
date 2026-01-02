import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

interface CreatePaymentIntentRequest {
  amount: number; // en centimes
  currency: string; // eur, usd, etc.
  description?: string;
  metadata?: Record<string, string>;
  customerId?: string;
}

@Injectable()
export class StripeService {
  private stripe: Stripe | null;
  private config: {
    secretKey: string;
    publishableKey: string;
    webhookSecret: string;
  };

  constructor(private configService: ConfigService) {
    const secretKey = this.configService.get<string>('STRIPE_SECRET_KEY') || '';
    const publishableKey = this.configService.get<string>('STRIPE_PUBLISHABLE_KEY') || '';
    const webhookSecret = this.configService.get<string>('STRIPE_WEBHOOK_SECRET') || '';

    if (!secretKey) {
      console.warn('⚠️ STRIPE_SECRET_KEY non configuré. Stripe ne fonctionnera pas.');
      this.stripe = null;
    } else {
      this.stripe = new Stripe(secretKey, {
        apiVersion: '2025-12-15.clover',
      });
    }

    this.config = {
      secretKey,
      publishableKey,
      webhookSecret,
    };
  }

  /**
   * Créer une intention de paiement
   */
  async createPaymentIntent(
    amount: number,
    currency: string = 'eur',
    description?: string,
    metadata?: Record<string, string>,
    customerId?: string,
  ): Promise<{
    clientSecret: string;
    paymentIntentId: string;
  }> {
    if (!this.stripe) {
      throw new Error('Stripe n\'est pas configuré. Veuillez configurer STRIPE_SECRET_KEY.');
    }
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convertir en centimes
        currency: currency.toLowerCase(),
        description,
        metadata,
        customer: customerId,
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        clientSecret: paymentIntent.client_secret!,
        paymentIntentId: paymentIntent.id,
      };
    } catch (error: any) {
      console.error('Erreur lors de la création du PaymentIntent Stripe:', error.message);
      throw new BadRequestException(
        error.message || 'Erreur lors de la création du paiement',
      );
    }
  }

  /**
   * Vérifier le statut d'un paiement
   */
  async verifyPayment(paymentIntentId: string): Promise<{
    status: 'SUCCESS' | 'FAILED' | 'PENDING';
    amount: number;
    currency: string;
    chargeId?: string;
  }> {
    if (!this.stripe) {
      throw new Error('Stripe n\'est pas configuré. Veuillez configurer STRIPE_SECRET_KEY.');
    }
    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentIntentId);

      let status: 'SUCCESS' | 'FAILED' | 'PENDING' = 'PENDING';
      if (paymentIntent.status === 'succeeded') {
        status = 'SUCCESS';
      } else if (paymentIntent.status === 'canceled') {
        status = 'FAILED';
      }

      return {
        status,
        amount: paymentIntent.amount / 100, // Convertir de centimes en euros
        currency: paymentIntent.currency,
        chargeId: paymentIntent.latest_charge as string | undefined,
      };
    } catch (error: any) {
      console.error('Erreur lors de la vérification du paiement Stripe:', error.message);
      throw new BadRequestException('Impossible de vérifier le paiement');
    }
  }

  /**
   * Rembourser un paiement
   */
  async refundPayment(
    chargeId: string,
    amount?: number, // Montant partiel, si non fourni = remboursement total
  ): Promise<{
    refundId: string;
    status: 'SUCCESS' | 'FAILED';
    amount: number;
  }> {
    if (!this.stripe) {
      throw new Error('Stripe n\'est pas configuré. Veuillez configurer STRIPE_SECRET_KEY.');
    }
    try {
      const refundParams: Stripe.RefundCreateParams = {
        charge: chargeId,
      };

      if (amount) {
        refundParams.amount = Math.round(amount * 100); // Convertir en centimes
      }

      const refund = await this.stripe.refunds.create(refundParams);

      return {
        refundId: refund.id,
        status: refund.status === 'succeeded' ? 'SUCCESS' : 'FAILED',
        amount: refund.amount / 100,
      };
    } catch (error: any) {
      console.error('Erreur lors du remboursement Stripe:', error.message);
      throw new BadRequestException('Impossible d\'effectuer le remboursement');
    }
  }

  /**
   * Créer un client Stripe
   */
  async createCustomer(
    email: string,
    name?: string,
    metadata?: Record<string, string>,
  ): Promise<string> {
    if (!this.stripe) {
      throw new Error('Stripe n\'est pas configuré. Veuillez configurer STRIPE_SECRET_KEY.');
    }
    try {
      const customer = await this.stripe.customers.create({
        email,
        name,
        metadata,
      });

      return customer.id;
    } catch (error: any) {
      console.error('Erreur lors de la création du client Stripe:', error.message);
      throw new BadRequestException('Impossible de créer le client');
    }
  }

  /**
   * Traiter un webhook Stripe
   */
  async processWebhook(payload: string | Buffer, signature: string): Promise<{
    type: string;
    data: any;
  }> {
    if (!this.stripe) {
      throw new Error('Stripe n\'est pas configuré. Veuillez configurer STRIPE_SECRET_KEY.');
    }
    try {
      const event = this.stripe.webhooks.constructEvent(
        payload,
        signature,
        this.config.webhookSecret,
      );

      return {
        type: event.type,
        data: event.data.object,
      };
    } catch (error: any) {
      console.error('Erreur lors du traitement du webhook Stripe:', error.message);
      throw new BadRequestException('Webhook invalide');
    }
  }

  /**
   * Obtenir la clé publique (pour le frontend)
   */
  getPublishableKey(): string {
    return this.config.publishableKey;
  }
}
