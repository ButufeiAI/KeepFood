import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5201/api';

export interface ZoneAssignment {
  id: string;
  zone: string;
  employeeId: string;
  employee: {
    id: string;
    firstName: string;
    lastName: string;
    role: string;
  };
  restaurantId: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateZoneAssignmentDto {
  zone: string;
  employeeId: string;
  restaurantId: string;
  isActive?: boolean;
}

export interface AssignMultipleEmployeesDto {
  zone: string;
  employeeIds: string[];
  restaurantId: string;
}

export const zoneAssignmentsService = {
  async getAll(restaurantId?: string): Promise<ZoneAssignment[]> {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/zone-assignments`, {
      params: { restaurantId },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async getByZone(restaurantId: string, zone: string): Promise<ZoneAssignment[]> {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/zone-assignments/zone/${zone}`, {
      params: { restaurantId },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async getByEmployee(employeeId: string): Promise<ZoneAssignment[]> {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/zone-assignments/employee/${employeeId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async create(data: CreateZoneAssignmentDto): Promise<ZoneAssignment> {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/zone-assignments`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async assignMultiple(data: AssignMultipleEmployeesDto): Promise<ZoneAssignment[]> {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/zone-assignments/assign-multiple`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async update(id: string, data: Partial<CreateZoneAssignmentDto>): Promise<ZoneAssignment> {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${API_URL}/zone-assignments/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  async delete(id: string): Promise<void> {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/zone-assignments/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
