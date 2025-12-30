import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('client_profiles')
export class ClientProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true })
  userId: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  // Informations personnelles
  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ length: 255, nullable: true })
  profileImage: string;

  @Column({ length: 10, nullable: true })
  gender: string;

  // Adresses
  @Column({ type: 'text', nullable: true })
  defaultDeliveryAddress: string;

  @Column({ type: 'text', nullable: true })
  savedAddresses: string; // JSON array

  // Préférences alimentaires
  @Column({ type: 'text', nullable: true })
  dietaryPreferences: string; // JSON

  @Column({ type: 'text', nullable: true })
  allergies: string; // JSON

  @Column({ type: 'text', nullable: true })
  favoriteCuisines: string; // JSON

  // Paiement
  @Column({ type: 'text', nullable: true })
  savedPaymentMethods: string; // JSON tokenized

  @Column({ length: 50, nullable: true })
  preferredPaymentMethod: string;

  // Communication
  @Column({ type: 'boolean', default: true })
  emailNotifications: boolean;

  @Column({ type: 'boolean', default: true })
  smsNotifications: boolean;

  @Column({ type: 'boolean', default: false })
  pushNotifications: boolean;

  @Column({ type: 'boolean', default: false })
  marketingEmails: boolean;

  @Column({ length: 10, nullable: true })
  preferredLanguage: string;

  // Statistiques
  @Column({ type: 'int', default: 0 })
  totalOrders: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalSpent: number;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  averageRating: number;

  @Column({ type: 'timestamp', nullable: true })
  lastOrderDate: Date;

  @Column({ type: 'uuid', nullable: true })
  favoriteRestaurantId: string;

  // Programme fidélité
  @Column({ type: 'int', default: 0 })
  loyaltyPoints: number;

  @Column({ type: 'int', default: 1 })
  loyaltyLevel: number;

  // Parrainage
  @Column({ length: 50, nullable: true, unique: true })
  referralCode: string;

  @Column({ type: 'uuid', nullable: true })
  referredById: string;

  @Column({ type: 'int', default: 0 })
  successfulReferrals: number;

  // Préférences UI
  @Column({ type: 'boolean', default: false })
  darkMode: boolean;

  @Column({ length: 50, default: 'cards' })
  menuViewPreference: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

