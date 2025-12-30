import api from './api';

export const paymentsService = {
  async createPaymentIntent(amount: number, restaurantId: string) {
    const response = await api.post('/payments/create-intent', {
      amount,
      restaurantId,
    });
    return response.data;
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

