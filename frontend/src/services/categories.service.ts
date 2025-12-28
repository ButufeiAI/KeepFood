import api from './api';

export interface Category {
  id: string;
  name: string;
  description?: string;
  restaurantId: string;
  parentCategoryId?: string;
  displayOrder: number;
  isActive: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCategoryDto {
  restaurantId: string;
  name: string;
  description?: string;
  parentCategoryId?: string;
  displayOrder?: number;
  isActive?: boolean;
  image?: string;
}

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}

export const categoriesService = {
  async getAll(restaurantId?: string): Promise<Category[]> {
    const url = restaurantId
      ? `/categories?restaurantId=${restaurantId}`
      : '/categories';
    const response = await api.get<Category[]>(url);
    return response.data;
  },

  async getOne(id: string): Promise<Category> {
    const response = await api.get<Category>(`/categories/${id}`);
    return response.data;
  },

  async create(data: CreateCategoryDto): Promise<Category> {
    const response = await api.post<Category>('/categories', data);
    return response.data;
  },

  async getWithSubcategories(restaurantId: string): Promise<{ main: Category[]; subcategories: Record<string, Category[]> }> {
    const all = await this.getAll(restaurantId);
    const main = all.filter(c => !c.parentCategoryId);
    const subcategories: Record<string, Category[]> = {};
    all.filter(c => c.parentCategoryId).forEach(sub => {
      if (!subcategories[sub.parentCategoryId!]) {
        subcategories[sub.parentCategoryId!] = [];
      }
      subcategories[sub.parentCategoryId!].push(sub);
    });
    return { main, subcategories };
  },

  async update(id: string, data: UpdateCategoryDto): Promise<Category> {
    const response = await api.patch<Category>(`/categories/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/categories/${id}`);
  },

  async initializeDefaults(restaurantId?: string): Promise<Category[]> {
    const url = restaurantId
      ? `/categories/initialize-defaults?restaurantId=${restaurantId}`
      : '/categories/initialize-defaults';
    const response = await api.post<Category[]>(url);
    return response.data;
  },
};



