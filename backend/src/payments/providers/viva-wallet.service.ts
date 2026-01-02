import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

interface VivaWalletConfig {
  clientId: string;
  clientSecret: string;
  merchantId: string;
  apiKey: string;
  environment: 'sandbox' | 'production';
}

interface CreatePaymentIntentRequest {
  amount: number; // en centimes
  currency: string; // EUR, USD, etc.
  customerTrns: string; // Description pour le client
  merchantTrns: string; // Description pour le marchand
  sourceCode?: string; // Code source (optionnel)
  metadata?: Record<string, any>;
}

interface PaymentIntentResponse {
  orderCode: string;
  transactionId: string;
  redirectUrl?: string;
}

@Injectable()
export class VivaWalletService {
  private axiosInstance: AxiosInstance;
  private config: VivaWalletConfig;
  private accessToken: string | null = null;
  private tokenExpiry: Date | null = null;

  constructor(private configService: ConfigService) {
    this.config = {
      clientId: this.configService.get<string>('VIVA_WALLET_CLIENT_ID') || '',
      clientSecret: this.configService.get<string>('VIVA_WALLET_CLIENT_SECRET') || '',
      merchantId: this.configService.get<string>('VIVA_WALLET_MERCHANT_ID') || '',
      apiKey: this.configService.get<string>('VIVA_WALLET_API_KEY') || '',
      environment: (this.configService.get<string>('VIVA_WALLET_ENVIRONMENT') || 'sandbox') as 'sandbox' | 'production',
    };

    const baseURL = this.config.environment === 'production'
      ? 'https://www.vivawallet.com/api'
      : 'https://demo.vivawallet.com/api';

    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Obtenir un token d'accès OAuth2
   */
  private async getAccessToken(): Promise<string> {
    // Vérifier si le token est encore valide
    if (this.accessToken && this.tokenExpiry && new Date() < this.tokenExpiry) {
      return this.accessToken;
    }

    try {
      const response = await axios.post(
        this.config.environment === 'production'
          ? 'https://www.vivawallet.com/connect/token'
          : 'https://demo.vivawallet.com/connect/token',
        new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: this.config.clientId,
          client_secret: this.config.clientSecret,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      this.accessToken = response.data.access_token;
      // Expire 5 minutes avant la date d'expiration réelle pour être sûr
      const expiresIn = response.data.expires_in || 3600;
      this.tokenExpiry = new Date(Date.now() + (expiresIn - 300) * 1000);

      return this.accessToken;
    } catch (error: any) {
      console.error('Erreur lors de l\'obtention du token Viva Wallet:', error.response?.data || error.message);
      throw new BadRequestException('Impossible de se connecter à Viva Wallet');
    }
  }

  /**
   * Créer une intention de paiement
   */
  async createPaymentIntent(
    amount: number,
    currency: string = 'EUR',
    customerTrns: string,
    merchantTrns: string,
    metadata?: Record<string, any>,
  ): Promise<PaymentIntentResponse> {
    try {
      const token = await this.getAccessToken();

      const request: CreatePaymentIntentRequest = {
        amount: Math.round(amount * 100), // Convertir en centimes
        currency,
        customerTrns,
        merchantTrns,
        metadata,
      };

      const response = await this.axiosInstance.post(
        '/orders',
        request,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return {
        orderCode: response.data.orderCode,
        transactionId: response.data.transactionId,
        redirectUrl: response.data.redirectUrl,
      };
    } catch (error: any) {
      console.error('Erreur lors de la création du paiement Viva Wallet:', error.response?.data || error.message);
      throw new BadRequestException(
        error.response?.data?.message || 'Erreur lors de la création du paiement',
      );
    }
  }

  /**
   * Vérifier le statut d'un paiement
   */
  async verifyPayment(orderCode: string): Promise<{
    status: 'SUCCESS' | 'FAILED' | 'PENDING';
    amount: number;
    currency: string;
    transactionId?: string;
  }> {
    try {
      const token = await this.getAccessToken();

      const response = await this.axiosInstance.get(
        `/orders/${orderCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const order = response.data;
      const status = order.status === 'F' ? 'SUCCESS' : order.status === 'C' ? 'FAILED' : 'PENDING';

      return {
        status,
        amount: order.amount / 100, // Convertir de centimes en euros
        currency: order.currencyCode,
        transactionId: order.transactionId,
      };
    } catch (error: any) {
      console.error('Erreur lors de la vérification du paiement Viva Wallet:', error.response?.data || error.message);
      throw new BadRequestException('Impossible de vérifier le paiement');
    }
  }

  /**
   * Rembourser un paiement
   */
  async refundPayment(
    orderCode: string,
    amount?: number, // Montant partiel, si non fourni = remboursement total
  ): Promise<{
    refundId: string;
    status: 'SUCCESS' | 'FAILED';
  }> {
    try {
      const token = await this.getAccessToken();

      const refundData: any = {};
      if (amount) {
        refundData.amount = Math.round(amount * 100); // Convertir en centimes
      }

      const response = await this.axiosInstance.post(
        `/orders/${orderCode}/refund`,
        refundData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return {
        refundId: response.data.refundId,
        status: response.data.status === 'SUCCESS' ? 'SUCCESS' : 'FAILED',
      };
    } catch (error: any) {
      console.error('Erreur lors du remboursement Viva Wallet:', error.response?.data || error.message);
      throw new BadRequestException('Impossible d\'effectuer le remboursement');
    }
  }

  /**
   * Traiter un webhook Viva Wallet
   */
  async processWebhook(payload: any, signature: string): Promise<{
    orderCode: string;
    status: 'SUCCESS' | 'FAILED';
    amount: number;
  }> {
    // TODO: Vérifier la signature du webhook pour sécurité
    // Pour l'instant, on fait confiance au payload

    return {
      orderCode: payload.orderCode || payload.OrderCode,
      status: payload.status === 'F' || payload.Status === 'F' ? 'SUCCESS' : 'FAILED',
      amount: (payload.amount || payload.Amount || 0) / 100,
    };
  }
}
