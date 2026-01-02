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

  async getAllEmployeesStats(restaurantId: string, period: 'day' | 'week' | 'month' | 'year' = 'month'): Promise<any[]> {
    const response = await api.get(`/statistics/all-employees?restaurantId=${restaurantId}&period=${period}`);
    return response.data;
  },

  async getEmployeeStats(restaurantId: string, employeeId: string, startDate?: string, endDate?: string): Promise<any> {
    let url = `/statistics/employee?restaurantId=${restaurantId}&employeeId=${employeeId}`;
    if (startDate) url += `&startDate=${startDate}`;
    if (endDate) url += `&endDate=${endDate}`;
    const response = await api.get(url);
    return response.data;
  },

  async getRestaurantEvolution(
    restaurantId: string,
    period: 'week' | 'month' | 'year' = 'month',
    metric: 'revenue' | 'orders' | 'avg' = 'revenue'
  ): Promise<Array<{ date: string; value: number }>> {
    const response = await api.get(
      `/statistics/restaurant-evolution?restaurantId=${restaurantId}&period=${period}&metric=${metric}`
    );
    return response.data;
  },
};



