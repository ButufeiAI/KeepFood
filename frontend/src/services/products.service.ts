import api from './api';

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  restaurantId: string;
  images?: ProductImage[];
  variants?: ProductVariant[];
  allergens?: string[];
  tags?: string[];
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductImage {
  id: string;
  url: string;
  isPrimary: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface CreateProductDto {
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  price: number;
  categoryId: string;
  type?: 'FOOD' | 'DRINK';
  allergens?: string[];
  tags?: string[];
  isAvailable?: boolean;
  images?: Array<{ url: string; isPrimary?: boolean; displayOrder?: number }>;
  variants?: Array<{
    name: string;
    priceModifier: number;
    isAvailable?: boolean;
  }>;
  displayOrder?: number;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export const productsService = {
  async getAll(restaurantId?: string): Promise<Product[]> {
    const url = restaurantId
      ? `/products?restaurantId=${restaurantId}`
      : '/products';
    const response = await api.get<Product[]>(url);
    return response.data;
  },

  async getOne(id: string): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  async create(data: CreateProductDto): Promise<Product> {
    const response = await api.post<Product>('/products', data);
    return response.data;
  },

  async update(id: string, data: UpdateProductDto): Promise<Product> {
    const response = await api.patch<Product>(`/products/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/products/${id}`);
  },
};



