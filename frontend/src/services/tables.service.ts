import api from './api';

export interface Table {
  id: string;
  name: string;
  restaurantId: string;
  qrCode?: string;
  capacity: number;
  isActive: boolean;
  zone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTableDto {
  restaurantId: string;
  name: string;
  capacity: number;
  zone?: string;
  isActive?: boolean;
}

export interface UpdateTableDto extends Partial<CreateTableDto> {}

export const tablesService = {
  async getAll(restaurantId?: string): Promise<Table[]> {
    const url = restaurantId
      ? `/tables?restaurantId=${restaurantId}`
      : '/tables';
    const response = await api.get<Table[]>(url);
    return response.data;
  },

  async getOne(id: string): Promise<Table> {
    const response = await api.get<Table>(`/tables/${id}`);
    return response.data;
  },

  async create(data: CreateTableDto): Promise<Table> {
    const response = await api.post<Table>('/tables', data);
    return response.data;
  },

  async update(id: string, data: UpdateTableDto): Promise<Table> {
    const response = await api.patch<Table>(`/tables/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/tables/${id}`);
  },
};

