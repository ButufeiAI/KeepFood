import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { User } from './user.entity';
import { Invoice } from './invoice.entity';
import { Payment } from './payment.entity';

export enum TransactionType {
  INCOME = 'INCOME', // Revenu (vente, facture client payée)
  EXPENSE = 'EXPENSE', // Dépense (achat, facture fournisseur payée)
  SALARY = 'SALARY', // Salaire
  OTHER = 'OTHER', // Autre
}

export enum TransactionCategory {
  SALES = 'SALES', // Ventes
  SUPPLIES = 'SUPPLIES', // Fournitures
  RENT = 'RENT', // Loyer
  UTILITIES = 'UTILITIES', // Services publics (eau, électricité, etc.)
  SALARY = 'SALARY', // Salaires
  MARKETING = 'MARKETING', // Marketing
  MAINTENANCE = 'MAINTENANCE', // Maintenance
  TAX = 'TAX', // Taxes
  OTHER = 'OTHER', // Autre
}

@Entity('transactions')
@Index(['restaurantId', 'date'])
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  type: TransactionType;

  @Column({
    type: 'enum',
    enum: TransactionCategory,
    default: TransactionCategory.OTHER,
  })
  category: TransactionCategory;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Index()
  @Column({ type: 'date' })
  date: Date; // Date de la transaction

  @Column({ length: 255 })
  description: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  // Références (optionnelles)
  @Column({ type: 'uuid', nullable: true })
  invoiceId: string;

  @ManyToOne(() => Invoice, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'invoiceId' })
  invoice: Invoice;

  @Column({ type: 'uuid', nullable: true })
  paymentId: string;

  @ManyToOne(() => Payment, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'paymentId' })
  payment: Payment;

  @Column({ type: 'uuid', nullable: true })
  orderId: string; // Si transaction liée à une commande

  // Utilisateur qui a enregistré la transaction
  @Column({ type: 'uuid', nullable: true })
  createdById: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'createdById' })
  createdBy: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

