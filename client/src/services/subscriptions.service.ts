import api from './api';

export interface Subscription {
  id: string;
  clientId: string;
  type: 'THREE_DAYS' | 'FIVE_DAYS' | 'MONTHLY';
  status: 'ACTIVE' | 'PAUSED' | 'EXPIRED';
  startDate: string;
  endDate?: string;
  mealsRemaining: number;
  totalMeals: number;
  restaurant: {
    id: string;
    name: string;
    logo?: string;
  };
}

export interface SubscriptionUsage {
  id: string;
  subscriptionId: string;
  orderId: string;
  usedAt: string;
  order: {
    id: string;
    totalAmount: number;
    createdAt: string;
  };
}

export const subscriptionsService = {
  async getClientSubscriptions(clientIdentifier: string, restaurantId?: string): Promise<Subscription[]> {
    const params = new URLSearchParams({ clientIdentifier });
    if (restaurantId) {
      params.append('restaurantId', restaurantId);
    }
    const response = await api.get(`/public/subscriptions/client?${params.toString()}`);
    return response.data;
  },

  async pauseSubscription(subscriptionId: string, startDate: string, endDate?: string, reason?: string) {
    const response = await api.post(`/public/subscriptions/${subscriptionId}/pause`, {
      startDate,
      endDate,
      reason,
    });
    return response.data;
  },

  async resumeSubscription(subscriptionId: string) {
    const response = await api.post(`/public/subscriptions/${subscriptionId}/resume`);
    return response.data;
  },

  async getUsageHistory(subscriptionId: string): Promise<SubscriptionUsage[]> {
    const response = await api.get(`/public/subscriptions/${subscriptionId}/usage`);
    return response.data;
  },
};

