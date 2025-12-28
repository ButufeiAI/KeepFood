import api from './api';
import { Restaurant } from '../types';

export interface CreateRestaurantDto {
  name: string;
  logo?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  email?: string;
  openingHours?: string;
  plan?: 'BASIC' | 'STANDARD' | 'PREMIUM';
  onSiteEnabled?: boolean;
  takeawayEnabled?: boolean;
  deliveryEnabled?: boolean;
  vatNumber?: string;
  billingAddress?: string;
}

export interface UpdateRestaurantDto extends Partial<CreateRestaurantDto> {}

export const restaurantsService = {
  async getAll(): Promise<Restaurant[]> {
    const response = await api.get<Restaurant[]>('/restaurants');
    return response.data;
  },

  async getOne(id: string): Promise<Restaurant> {
    const response = await api.get<Restaurant>(`/restaurants/${id}`);
    return response.data;
  },

  async create(data: CreateRestaurantDto): Promise<Restaurant> {
    const response = await api.post<Restaurant>('/restaurants', data);
    return response.data;
  },

  async update(id: string, data: UpdateRestaurantDto): Promise<Restaurant> {
    const response = await api.patch<Restaurant>(`/restaurants/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/restaurants/${id}`);
  },
};



