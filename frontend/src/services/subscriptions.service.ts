import api from './api';

export type SubscriptionType = 'THREE_DAYS' | 'FIVE_DAYS' | 'MONTHLY';
export type SubscriptionStatus = 'ACTIVE' | 'PAUSED' | 'EXPIRED' | 'CANCELLED';

export interface Subscription {
  id: string;
  restaurantId: string;
  clientId: string;
  type: SubscriptionType;
  price: number;
  startDate: Date;
  endDate?: Date;
  totalMeals: number;
  consumedMeals: number;
  mealsPerWeek?: number;
  preferredDays?: string[]; // JSON array
  isRecurring: boolean;
  paymentMethodId?: string;
  status: SubscriptionStatus;
  pauseStartDate?: Date;
  pauseEndDate?: Date;
  pauseReason?: string;
  client?: {
    id: string;
    name?: string;
    email?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface SubscriptionUsage {
  id: string;
  subscriptionId: string;
  orderId?: string;
  usedDate: Date;
  mealType?: string;
  notes?: string;
  order?: {
    id: string;
    totalAmount: number;
  };
}

export interface CreateSubscriptionDto {
  clientId: string;
  type: SubscriptionType;
  price: number;
  startDate: string; // ISO date string
  endDate?: string;
  totalMeals: number;
  mealsPerWeek?: number;
  preferredDays?: string[];
  isRecurring?: boolean;
  paymentMethodId?: string;
}

export interface UpdateSubscriptionDto {
  startDate?: string;
  endDate?: string;
  preferredDays?: string[];
  pauseStartDate?: string;
  pauseEndDate?: string;
  status?: SubscriptionStatus;
  consumedMeals?: number;
}

export interface UseSubscriptionDto {
  subscriptionId: string;
  orderId: string;
  mealType?: string;
  notes?: string;
}

export const subscriptionsService = {
  async getAll(restaurantId: string): Promise<Subscription[]> {
    const response = await api.get('/subscriptions');
    return response.data;
  },

  async getOne(id: string): Promise<Subscription> {
    const response = await api.get(`/subscriptions/${id}`);
    return response.data;
  },

  async getByClient(clientId: string): Promise<Subscription[]> {
    const response = await api.get(`/subscriptions/client/${clientId}`);
    return response.data;
  },

  async create(data: CreateSubscriptionDto): Promise<Subscription> {
    const response = await api.post('/subscriptions', data);
    return response.data;
  },

  async update(id: string, data: UpdateSubscriptionDto): Promise<Subscription> {
    const response = await api.put(`/subscriptions/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/subscriptions/${id}`);
  },

  async useSubscription(data: UseSubscriptionDto): Promise<Subscription> {
    const response = await api.post('/subscriptions/use', data);
    return response.data;
  },

  async pauseSubscription(id: string, startDate: string, endDate?: string, reason?: string): Promise<Subscription> {
    const response = await api.post(`/subscriptions/${id}/pause`, {
      startDate,
      endDate,
      reason,
    });
    return response.data;
  },

  async resumeSubscription(id: string): Promise<Subscription> {
    const response = await api.post(`/subscriptions/${id}/resume`);
    return response.data;
  },

  async getUsageHistory(id: string): Promise<SubscriptionUsage[]> {
    const response = await api.get(`/subscriptions/${id}/usage`);
    return response.data;
  },
};
