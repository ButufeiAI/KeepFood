import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5201/api';

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
  position?: string;
  restaurantId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateEmployeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: string;
  position?: string;
  restaurantId: string;
}

export const employeesService = {
  async getAll(restaurantId?: string): Promise<Employee[]> {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/employees`, {
      params: { restaurantId },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async getById(id: string): Promise<Employee> {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/employees/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async create(data: CreateEmployeeDto): Promise<Employee> {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/employees`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async update(id: string, data: Partial<CreateEmployeeDto>): Promise<Employee> {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/employees/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async delete(id: string): Promise<void> {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/employees/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
