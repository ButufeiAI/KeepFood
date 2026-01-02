import api from './api';

export interface EstablishmentType {
  id: string;
  name: string;
  description?: string;
  image?: string;
  status: 'ACTIVE' | 'EXPIRED';
  isActive: boolean;
  displayOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEstablishmentTypeDto {
  name: string;
  description?: string;
  image?: string;
  status?: 'ACTIVE' | 'EXPIRED';
  isActive?: boolean;
  displayOrder?: number;
}

export interface UpdateEstablishmentTypeDto extends Partial<CreateEstablishmentTypeDto> {}

export const establishmentTypesService = {
  async getAll(): Promise<EstablishmentType[]> {
    const response = await api.get<EstablishmentType[]>('/establishment-types');
    return response.data;
  },

  async getOne(id: string): Promise<EstablishmentType> {
    const response = await api.get<EstablishmentType>(`/establishment-types/${id}`);
    return response.data;
  },

  async create(data: CreateEstablishmentTypeDto): Promise<EstablishmentType> {
    const response = await api.post<EstablishmentType>('/establishment-types', data);
    return response.data;
  },

  async update(id: string, data: UpdateEstablishmentTypeDto): Promise<EstablishmentType> {
    const response = await api.patch<EstablishmentType>(`/establishment-types/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/establishment-types/${id}`);
  },
};
