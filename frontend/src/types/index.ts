export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN_RESTAURANT = 'ADMIN_RESTAURANT',
  MANAGER = 'MANAGER',
  SERVEUR = 'SERVEUR',
  CUISINE = 'CUISINE',
  BAR = 'BAR',
  LIVREUR = 'LIVREUR', // Chauffeur/Livreur pour les livraisons
  CAISSIER = 'CAISSIER', // Pour l'encaissement
  STOCK = 'STOCK', // Gestionnaire de stock
  CLIENT = 'CLIENT',
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  restaurantId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Restaurant {
  id: string;
  name: string;
  logo?: string;
  address?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  email?: string;
  plan: 'BASIC' | 'STANDARD' | 'PREMIUM';
  onSiteEnabled?: boolean;
  takeawayEnabled?: boolean;
  deliveryEnabled?: boolean;
  isActive: boolean;
  vatNumber?: string;
  employeeCount?: number;
  description?: string;
  activities?: string;
  establishmentDate?: string;
  website?: string;
  socialMedia?: string;
  createdAt: Date;
  updatedAt: Date;
}



