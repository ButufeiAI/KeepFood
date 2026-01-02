import api from './api';

export interface Payment {
  id: string;
  orderId: string;
  restaurantId: string;
  amount: number;
  paymentMethod: 'CASH' | 'CARD_TERMINAL' | 'ONLINE' | 'WALLET';
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';
  provider: string;
  transactionId?: string;
  createdAt: Date;
  order?: {
    id: string;
    table?: {
      name: string;
    };
  };
}

export interface PaymentHistory {
  payments: Payment[];
  total: number;
}

export const paymentsService = {
  async getPaymentHistory(
    restaurantId: string,
    limit: number = 50,
    offset: number = 0,
  ): Promise<PaymentHistory> {
    const response = await api.get('/payments/history', {
      params: { restaurantId, limit, offset },
    });
    return response.data;
  },

  async getPayment(id: string): Promise<Payment> {
    const response = await api.get(`/payments/${id}`);
    return response.data;
  },

  async refundPayment(id: string, amount?: number): Promise<Payment> {
    const response = await api.post(`/payments/${id}/refund`, { amount });
    return response.data;
  },
};
