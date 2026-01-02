import api from './api';

export const paymentsService = {
  async createPaymentIntent(amount: number, restaurantId: string, currency: string = 'EUR', description?: string) {
    const response = await api.post('/payments/create-intent', {
      amount,
      restaurantId,
      currency,
      description,
    });
    return response.data;
  },

  async getRestaurantPaymentProvider(restaurantId: string): Promise<string> {
    try {
      const response = await api.get(`/public/restaurant/${restaurantId}`);
      return response.data.paymentProvider || 'CASH_ONLY';
    } catch (error) {
      return 'CASH_ONLY';
    }
  },

  async confirmPaymentAndCreateOrder(data: {
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
  }) {
    const response = await api.post('/payments/confirm-and-create-order', data);
    return response.data;
  },
};

