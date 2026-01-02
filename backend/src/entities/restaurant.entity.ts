import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { PlanType } from '../common/enums/plan.enum';
import { User } from './user.entity';
import { Table } from './table.entity';
import { Category } from './category.entity';
import { Order } from './order.entity';

@Entity('restaurants')
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ length: 255, unique: true })
  name: string;

  @Column({ length: 255, nullable: true })
  logo: string;

  @Column({ length: 500, nullable: true })
  address: string;

  @Column({ length: 100, nullable: true })
  city: string;

  @Column({ length: 20, nullable: true })
  zipCode: string;

  @Column({ length: 100, nullable: true })
  country: string;

  @Column({ length: 50, nullable: true })
  phone: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  openingHours: string; // JSON string with opening hours

  @Column({
    type: 'enum',
    enum: PlanType,
    default: PlanType.BASIC,
  })
  plan: PlanType;

  @Column({ type: 'boolean', default: true })
  onSiteEnabled: boolean; // Sur place

  @Column({ type: 'boolean', default: false })
  takeawayEnabled: boolean; // À emporter

  @Column({ type: 'boolean', default: false })
  deliveryEnabled: boolean; // Livraison

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ length: 50, nullable: true })
  vatNumber: string;

  @Column({ type: 'text', nullable: true })
  billingAddress: string;

  @Column({ type: 'int', nullable: true })
  employeeCount: number; // Nombre de travailleurs/employés

  @Column({ type: 'text', nullable: true })
  description: string; // Description détaillée de ce que fait le restaurant

  @Column({ type: 'text', nullable: true })
  activities: string; // Activités principales (JSON array ou texte)

  @Column({ type: 'date', nullable: true })
  establishmentDate: Date; // Date de création de l'établissement

  @Column({ type: 'text', nullable: true })
  website: string; // Site web du restaurant

  @Column({ type: 'text', nullable: true })
  socialMedia: string; // Réseaux sociaux (JSON object)

  // Configuration paiements
  @Column({ length: 50, nullable: true })
  paymentProvider: string; // 'VIVA_WALLET' | 'STRIPE' | 'CASH_ONLY'

  @Column({ type: 'text', nullable: true })
  paymentConfig: string; // JSON avec les clés API, merchant ID, etc.

  @OneToMany(() => User, (user) => user.restaurant)
  users: User[];

  @OneToMany(() => Table, (table) => table.restaurant)
  tables: Table[];

  @OneToMany(() => Category, (category) => category.restaurant)
  categories: Category[];

  @OneToMany(() => Order, (order) => order.restaurant)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}



