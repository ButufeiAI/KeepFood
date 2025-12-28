import api from './api';

export interface Restaurant {
  id: string;
  name: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  email?: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  images: string[];
  variants: ProductVariant[];
  type: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  image?: string;
  products: Product[];
}

export interface Table {
  id: string;
  name: string;
  restaurantId: string;
  restaurant: {
    id: string;
    name: string;
  };
}

export interface OrderItem {
  productId: string;
  variantId?: string;
  quantity: number;
  notes?: string;
}

export interface CreateOrderDto {
  restaurantId: string;
  tableId?: string;
  items: OrderItem[];
  notes?: string;
}

export const publicService = {
  async getRestaurant(id: string): Promise<Restaurant> {
    const response = await api.get<Restaurant>(`/public/restaurant/${id}`);
    return response.data;
  },

  async getMenu(restaurantId: string): Promise<Category[]> {
    const response = await api.get<Category[]>(`/public/restaurant/${restaurantId}/menu`);
    return response.data;
  },

  async getTable(id: string): Promise<Table> {
    const response = await api.get<Table>(`/public/table/${id}`);
    return response.data;
  },

  async createOrder(order: CreateOrderDto) {
    const response = await api.post('/public/orders', order);
    return response.data;
  },
};

