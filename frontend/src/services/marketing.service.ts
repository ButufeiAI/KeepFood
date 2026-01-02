import api from './api';

export type PromoCodeType = 'PERCENTAGE' | 'FIXED' | 'FREE_SHIPPING';

export interface PromoCode {
  id: string;
  restaurantId: string;
  code: string;
  name: string;
  description?: string;
  type: PromoCodeType;
  discountValue: number;
  minOrderAmount?: number;
  maxDiscountAmount?: number;
  validFrom?: Date;
  validUntil?: Date;
  maxUses?: number;
  usedCount: number;
  maxUsesPerClient?: number;
  isActive: boolean;
  applicableProducts?: string[];
  applicableCategories?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PromoCodeUsage {
  id: string;
  promoCodeId: string;
  orderId?: string;
  clientId?: string;
  clientIdentifier?: string;
  discountAmount: number;
  usedAt: Date;
}

export interface CreatePromoCodeDto {
  code: string;
  name: string;
  description?: string;
  type: PromoCodeType;
  discountValue: number;
  minOrderAmount?: number;
  maxDiscountAmount?: number;
  validFrom?: string;
  validUntil?: string;
  maxUses?: number;
  maxUsesPerClient?: number;
  isActive?: boolean;
  applicableProducts?: string[];
  applicableCategories?: string[];
}

export interface UpdatePromoCodeDto {
  code?: string;
  name?: string;
  description?: string;
  type?: PromoCodeType;
  discountValue?: number;
  minOrderAmount?: number;
  maxDiscountAmount?: number;
  validFrom?: string;
  validUntil?: string;
  maxUses?: number;
  maxUsesPerClient?: number;
  isActive?: boolean;
  applicableProducts?: string[];
  applicableCategories?: string[];
}

export const marketingService = {
  async getPromoCodes(restaurantId: string): Promise<PromoCode[]> {
    const response = await api.get('/marketing/promo-codes');
    return response.data;
  },

  async getPromoCode(id: string): Promise<PromoCode> {
    const response = await api.get(`/marketing/promo-codes/${id}`);
    return response.data;
  },

  async createPromoCode(data: CreatePromoCodeDto): Promise<PromoCode> {
    const response = await api.post('/marketing/promo-codes', data);
    return response.data;
  },

  async updatePromoCode(id: string, data: UpdatePromoCodeDto): Promise<PromoCode> {
    const response = await api.put(`/marketing/promo-codes/${id}`, data);
    return response.data;
  },

  async deletePromoCode(id: string): Promise<void> {
    await api.delete(`/marketing/promo-codes/${id}`);
  },

  async validatePromoCode(code: string, orderAmount: number = 0): Promise<PromoCode> {
    const response = await api.post('/marketing/promo-codes/validate', {
      code,
      orderAmount,
    });
    return response.data;
  },

  async applyPromoCode(code: string, orderAmount: number, clientIdentifier?: string): Promise<{ promoCode: PromoCode; discountAmount: number }> {
    const response = await api.post('/marketing/promo-codes/apply', {
      code,
      orderAmount,
      clientIdentifier,
    });
    return response.data;
  },

  async getPromoCodeUsage(id: string): Promise<PromoCodeUsage[]> {
    const response = await api.get(`/marketing/promo-codes/${id}/usage`);
    return response.data;
  },
};
