import api from './api';

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PREPARATION = 'IN_PREPARATION',
  READY = 'READY',
  SERVED = 'SERVED',
  CANCELLED = 'CANCELLED',
  PAID = 'PAID',
}

export interface OrderItem {
  id: string;
  productId: string;
  productName?: string;
  product?: {
    id: string;
    name: string;
  };
  quantity: number;
  price?: number;
  unitPrice?: number;
  totalPrice?: number;
  status?: OrderStatus;
  itemStatus?: string;
  notes?: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  tableId?: string;
  table?: {
    id: string;
    name: string;
  };
  userId?: string;
  items: OrderItem[];
  status: OrderStatus;
  total?: number;
  totalAmount?: number;
  isPaid?: boolean;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrderDto {
  tableId?: string;
  items: {
    productId: string;
    quantity: number;
    notes?: string;
  }[];
  notes?: string;
}

export interface UpdateOrderDto {
  status?: OrderStatus;
  isPaid?: boolean;
  serverId?: string;
  notes?: string;
  items?: {
    id: string;
    status?: OrderStatus;
  }[];
}

export const ordersService = {
  async getAll(restaurantId?: string): Promise<Order[]> {
    const url = restaurantId
      ? `/orders?restaurantId=${restaurantId}`
      : '/orders';
    const response = await api.get<Order[]>(url);
    return response.data;
  },

  async getOne(id: string): Promise<Order> {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
  },

  async create(data: CreateOrderDto): Promise<Order> {
    const response = await api.post<Order>('/orders', data);
    return response.data;
  },

  async update(id: string, data: UpdateOrderDto): Promise<Order> {
    const response = await api.patch<Order>(`/orders/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/orders/${id}`);
  },

  async getActive(restaurantId?: string): Promise<Order[]> {
    const url = restaurantId
      ? `/orders?restaurantId=${restaurantId}&active=true`
      : '/orders?active=true';
    const response = await api.get<Order[]>(url);
    return response.data;
  },
};



