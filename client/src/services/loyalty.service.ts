import api from './api';

export interface LoyaltyReward {
  id: string;
  name: string;
  description?: string;
  type: 'FREE_PRODUCT' | 'PERCENTAGE_DISCOUNT' | 'FIXED_DISCOUNT';
  pointsRequired: number;
  productId?: string;
  discountPercentage?: number;
  discountAmount?: number;
  maxDiscountAmount?: number;
  isActive: boolean;
}

export interface LoyaltyAccount {
  id: string;
  points: number;
  totalPointsEarned: number;
  totalPointsSpent: number;
  transactions?: LoyaltyTransaction[];
}

export interface LoyaltyTransaction {
  id: string;
  type: 'EARNED' | 'SPENT';
  points: number;
  description: string;
  balanceAfter: number;
  createdAt: Date;
}

export const loyaltyService = {
  async getMyAccount(restaurantId: string, clientIdentifier: string): Promise<LoyaltyAccount> {
    const response = await api.get('/public/loyalty/account', {
      params: { restaurantId, clientIdentifier },
    });
    return response.data;
  },

  async getAvailableRewards(restaurantId: string, clientIdentifier: string): Promise<LoyaltyReward[]> {
    try {
      const response = await api.get('/public/loyalty/rewards', {
        params: { restaurantId, clientIdentifier },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async useReward(restaurantId: string, clientIdentifier: string, rewardId: string, orderId?: string): Promise<{ account: LoyaltyAccount; reward: LoyaltyReward }> {
    // Pour utiliser une récompense, on doit être authentifié ou passer par un endpoint public
    // Pour l'instant, on utilise l'endpoint public avec restaurantId
    try {
      // Créer un endpoint public pour utiliser les récompenses
      const response = await api.post('/public/loyalty/rewards/use', {
        restaurantId,
        clientIdentifier,
        rewardId,
        orderId,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erreur lors de l\'utilisation de la récompense');
    }
  },
};
