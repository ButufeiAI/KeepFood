import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../services/api';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  restaurantId?: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          const response = await api.post('/auth/login', { email, password });
          const { accessToken, user } = response.data;
          
          // Définir le token dans les headers par défaut
          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          
          set({
            user,
            accessToken,
            isAuthenticated: true,
          });
        } catch (error: any) {
          throw new Error(error.response?.data?.message || 'Erreur lors de la connexion');
        }
      },

      register: async (data: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone?: string;
      }) => {
        try {
          const response = await api.post('/auth/register', {
            ...data,
            role: 'CLIENT',
          });
          const { accessToken, user } = response.data;
          
          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          
          set({
            user,
            accessToken,
            isAuthenticated: true,
          });
        } catch (error: any) {
          throw new Error(error.response?.data?.message || 'Erreur lors de l\'inscription');
        }
      },

      logout: () => {
        api.defaults.headers.common['Authorization'] = '';
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        });
      },

      checkAuth: async () => {
        const { accessToken } = get();
        if (!accessToken) {
          return;
        }

        try {
          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          const response = await api.get('/auth/me');
          set({
            user: response.data,
            isAuthenticated: true,
          });
        } catch (error) {
          // Token invalide, déconnecter
          get().logout();
        }
      },
    }),
    {
      name: 'keepfood-client-auth',
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
      }),
    }
  )
);

