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
  logo?: string;
  description?: string;
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
  tableSessionId?: string;
  clientIdentifier?: string;
  clientName?: string;
  items: OrderItem[];
  notes?: string;
}

export interface TableSession {
  id: string;
  restaurantId: string;
  tableId: string;
  status: string;
  totalAmount: number;
  isPaid: boolean;
  orders: Order[];
  createdAt: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  tableId: string;
  tableSessionId?: string;
  clientIdentifier?: string;
  clientName?: string;
  totalAmount: number;
  isPaid: boolean;
  items: OrderItem[];
  createdAt: string;
}

export const publicService = {
  async getAllRestaurants(): Promise<Restaurant[]> {
    const response = await api.get<Restaurant[]>('/public/restaurants');
    return response.data;
  },

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

  async getTableSession(sessionId: string): Promise<TableSession> {
    const response = await api.get<TableSession>(`/public/table-session/${sessionId}/orders`);
    return response.data;
  },

  async getOrCreateTableSession(tableId: string, restaurantId: string): Promise<TableSession> {
    const response = await api.post<TableSession>(`/table-sessions/table/${tableId}/restaurant/${restaurantId}`);
    return response.data;
  },

  // Favoris
  async getFavorites(clientIdentifier: string, restaurantId: string) {
    const response = await api.get(`/public/favorites?clientIdentifier=${clientIdentifier}&restaurantId=${restaurantId}`);
    return response.data;
  },

  async checkFavorite(productId: string, clientIdentifier: string, restaurantId: string) {
    const response = await api.get(`/public/favorites/${productId}/check?clientIdentifier=${clientIdentifier}&restaurantId=${restaurantId}`);
    return response.data;
  },

  async addFavorite(productId: string, clientIdentifier: string, restaurantId: string) {
    const response = await api.post(`/public/favorites/${productId}?clientIdentifier=${clientIdentifier}&restaurantId=${restaurantId}`);
    return response.data;
  },

  async removeFavorite(productId: string, clientIdentifier: string, restaurantId: string) {
    await api.delete(`/public/favorites/${productId}?clientIdentifier=${clientIdentifier}&restaurantId=${restaurantId}`);
  },
};

