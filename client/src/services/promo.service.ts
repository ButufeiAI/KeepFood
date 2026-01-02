import api from './api';

export interface PromoCode {
  id: string;
  code: string;
  name: string;
  description?: string;
  type: 'PERCENTAGE' | 'FIXED' | 'FREE_SHIPPING';
  discountValue: number;
  minOrderAmount?: number;
  maxDiscountAmount?: number;
}

export const promoService = {
  async validatePromoCode(restaurantId: string, code: string, orderAmount: number = 0): Promise<PromoCode> {
    const response = await api.post('/public/promo-codes/validate', {
      restaurantId,
      code,
      orderAmount,
    });
    return response.data;
  },

  async applyPromoCode(
    restaurantId: string,
    code: string,
    orderAmount: number,
    clientIdentifier?: string,
  ): Promise<{ promoCode: PromoCode; discountAmount: number }> {
    const response = await api.post('/public/promo-codes/apply', {
      restaurantId,
      code,
      orderAmount,
      clientIdentifier,
    });
    return response.data;
  },
};
