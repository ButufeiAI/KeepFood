import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { User } from './user.entity';
import { Transaction } from './transaction.entity';

export enum InvoiceType {
  INCOME = 'INCOME', // Facture client (entrée)
  EXPENSE = 'EXPENSE', // Facture fournisseur (sortie)
}

export enum InvoiceStatus {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

@Entity('invoices')
@Index(['restaurantId', 'invoiceNumber'])
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ length: 100, unique: true })
  invoiceNumber: string; // Numéro de facture unique (ex: INV-2025-001)

  @Column({
    type: 'enum',
    enum: InvoiceType,
  })
  type: InvoiceType;

  @Column({
    type: 'enum',
    enum: InvoiceStatus,
    default: InvoiceStatus.DRAFT,
  })
  status: InvoiceStatus;

  // Informations du client/fournisseur
  @Column({ length: 255 })
  recipientName: string;

  @Column({ length: 255, nullable: true })
  recipientEmail: string;

  @Column({ length: 500, nullable: true })
  recipientAddress: string;

  @Column({ length: 100, nullable: true })
  recipientVatNumber: string; // Numéro TVA

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number; // Montant HT

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  taxAmount: number; // Montant TVA

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number; // Montant TTC

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 21 })
  taxRate: number; // Taux de TVA (%)

  @Column({ type: 'date' })
  issueDate: Date; // Date d'émission

  @Column({ type: 'date', nullable: true })
  dueDate: Date; // Date d'échéance

  @Column({ type: 'text', nullable: true })
  description: string; // Description des produits/services

  @Column({ type: 'text', nullable: true })
  notes: string; // Notes additionnelles

  // Références aux commandes (si facture client liée à une commande)
  @Column({ type: 'uuid', nullable: true })
  orderId: string;

  // Utilisateur qui a créé la facture
  @Column({ type: 'uuid', nullable: true })
  createdById: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'createdById' })
  createdBy: User;

  // PEPPOL Integration
  @Column({ type: 'boolean', default: false })
  peppolEnabled: boolean; // Si la facture doit être envoyée via PEPPOL

  @Column({ length: 255, nullable: true })
  peppolDocumentId: string; // ID du document PEPPOL

  @Column({ type: 'text', nullable: true })
  peppolResponse: string; // Réponse JSON de Dokapi/PEPPOL

  @OneToMany(() => Transaction, (transaction) => transaction.invoice)
  transactions: Transaction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

