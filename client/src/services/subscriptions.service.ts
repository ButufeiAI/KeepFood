import api from './api';

export type SubscriptionType = 'THREE_DAYS' | 'FIVE_DAYS' | 'MONTHLY';
export type SubscriptionStatus = 'ACTIVE' | 'PAUSED' | 'EXPIRED' | 'CANCELLED';

export interface Subscription {
  id: string;
  type: SubscriptionType;
  price: number;
  startDate: Date;
  endDate?: Date;
  totalMeals: number;
  consumedMeals: number;
  mealsPerWeek?: number;
  preferredDays?: string[];
  isRecurring: boolean;
  status: SubscriptionStatus;
  pauseStartDate?: Date;
  pauseEndDate?: Date;
  pauseReason?: string;
}

export interface SubscriptionUsage {
  id: string;
  subscriptionId: string;
  orderId?: string;
  usedDate: Date;
  mealType?: string;
  notes?: string;
}

export const subscriptionsService = {
  async getMySubscriptions(restaurantId: string, clientIdentifier: string): Promise<Subscription[]> {
    try {
      const response = await api.get('/public/subscriptions', {
        params: { restaurantId, clientIdentifier },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async useSubscriptionMeal(
    restaurantId: string,
    clientIdentifier: string,
    subscriptionId: string,
    orderId: string,
    mealType?: string,
    notes?: string,
  ): Promise<SubscriptionUsage> {
    const response = await api.post('/public/subscriptions/use', {
      restaurantId,
      clientIdentifier,
      subscriptionId,
      orderId,
      mealType,
      notes,
    });
    return response.data;
  },
};
