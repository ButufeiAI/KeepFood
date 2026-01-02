import api from './api';

export interface LoyaltyReward {
  id: string;
  restaurantId: string;
  name: string;
  description?: string;
  type: 'FREE_PRODUCT' | 'PERCENTAGE_DISCOUNT' | 'FIXED_DISCOUNT';
  pointsRequired: number;
  productId?: string;
  discountPercentage?: number;
  discountAmount?: number;
  maxDiscountAmount?: number;
  isActive: boolean;
  maxUsesPerClient?: number;
  validFrom?: Date;
  validUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoyaltyAccount {
  id: string;
  restaurantId: string;
  clientId: string;
  points: number;
  totalPointsEarned: number;
  totalPointsSpent: number;
  isActive: boolean;
  client?: {
    id: string;
    name?: string;
    email?: string;
  };
  transactions?: LoyaltyTransaction[];
}

export interface LoyaltyTransaction {
  id: string;
  loyaltyAccountId: string;
  type: 'EARNED' | 'SPENT';
  points: number;
  description: string;
  orderId?: string;
  balanceAfter: number;
  createdAt: Date;
}

export interface CreateLoyaltyRewardDto {
  name: string;
  description?: string;
  type: 'FREE_PRODUCT' | 'PERCENTAGE_DISCOUNT' | 'FIXED_DISCOUNT';
  pointsRequired: number;
  productId?: string;
  discountPercentage?: number;
  discountAmount?: number;
  maxDiscountAmount?: number;
  isActive?: boolean;
  maxUsesPerClient?: number;
  validFrom?: Date;
  validUntil?: Date;
}

export interface UpdateLoyaltyRewardDto {
  name?: string;
  description?: string;
  type?: 'FREE_PRODUCT' | 'PERCENTAGE_DISCOUNT' | 'FIXED_DISCOUNT';
  pointsRequired?: number;
  productId?: string;
  discountPercentage?: number;
  discountAmount?: number;
  maxDiscountAmount?: number;
  isActive?: boolean;
  maxUsesPerClient?: number;
  validFrom?: Date;
  validUntil?: Date;
}

export interface UseRewardDto {
  rewardId: string;
  orderId?: string;
}

export const loyaltyService = {
  // ========== RÉCOMPENSES (Admin) ==========
  
  async getRewards(restaurantId: string): Promise<LoyaltyReward[]> {
    const response = await api.get('/loyalty/rewards');
    return response.data;
  },

  async getReward(rewardId: string): Promise<LoyaltyReward> {
    const response = await api.get(`/loyalty/rewards/${rewardId}`);
    return response.data;
  },

  async createReward(data: CreateLoyaltyRewardDto): Promise<LoyaltyReward> {
    const response = await api.post('/loyalty/rewards', data);
    return response.data;
  },

  async updateReward(rewardId: string, data: UpdateLoyaltyRewardDto): Promise<LoyaltyReward> {
    const response = await api.put(`/loyalty/rewards/${rewardId}`, data);
    return response.data;
  },

  async deleteReward(rewardId: string): Promise<void> {
    await api.delete(`/loyalty/rewards/${rewardId}`);
  },

  // ========== COMPTE DE FIDÉLITÉ (Client) ==========

  async getMyAccount(clientIdentifier: string): Promise<LoyaltyAccount> {
    const response = await api.get('/loyalty/account', {
      params: { clientIdentifier },
    });
    return response.data;
  },

  async getAccount(clientId: string): Promise<LoyaltyAccount> {
    const response = await api.get(`/loyalty/account/${clientId}`);
    return response.data;
  },

  async getTransactions(clientId: string): Promise<LoyaltyTransaction[]> {
    const response = await api.get(`/loyalty/account/${clientId}/transactions`);
    return response.data;
  },

  // ========== RÉCOMPENSES DISPONIBLES ==========

  async getAvailableRewards(clientId: string): Promise<LoyaltyReward[]> {
    const response = await api.get(`/loyalty/rewards/available/${clientId}`);
    return response.data;
  },

  async useReward(clientIdentifier: string, data: UseRewardDto): Promise<{ account: LoyaltyAccount; reward: LoyaltyReward }> {
    const response = await api.post('/loyalty/rewards/use', data, {
      params: { clientIdentifier },
    });
    return response.data;
  },
};
