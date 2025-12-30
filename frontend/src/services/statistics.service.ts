import api from './api';

export interface DashboardStats {
  revenue: {
    total: number;
    today: number;
    week: number;
  };
  orders: {
    total: number;
    today: number;
    pending: number;
    active: number;
  };
  products: {
    total: number;
    available: number;
  };
  tables: {
    total: number;
    available: number;
  };
  topProducts: Array<{
    productId: string;
    name: string;
    quantity: number;
  }>;
  revenueByDay: Array<{
    date: string;
    revenue: string;
  }>;
  ordersByStatus: Array<{
    status: string;
    count: string;
  }>;
}

export interface SuperAdminStats {
  restaurants: {
    total: number;
    active: number;
  };
  users: {
    total: number;
  };
  orders: {
    total: number;
  };
  revenue: {
    total: number;
  };
}

export interface ServerPerformance {
  serverId: string;
  serverName: string;
  orderCount: number;
  totalRevenue: number;
}

export const statisticsService = {
  async getDashboardStats(restaurantId?: string): Promise<DashboardStats> {
    const url = restaurantId
      ? `/statistics/dashboard?restaurantId=${restaurantId}`
      : '/statistics/dashboard';
    const response = await api.get<DashboardStats>(url);
    return response.data;
  },

  async getSuperAdminStats(): Promise<SuperAdminStats> {
    const response = await api.get<SuperAdminStats>('/statistics/super-admin');
    return response.data;
  },

  async getServerPerformance(restaurantId: string, period: 'day' | 'week' | 'month' = 'day'): Promise<ServerPerformance[]> {
    const response = await api.get<ServerPerformance[]>(`/statistics/server-performance?restaurantId=${restaurantId}&period=${period}`);
    return response.data;
  },
};



