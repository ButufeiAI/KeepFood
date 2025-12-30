import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { LoyaltyAccount } from './loyalty-account.entity';
import { Order } from './order.entity';

export enum LoyaltyTransactionType {
  EARNED = 'EARNED', // Points gagnés
  SPENT = 'SPENT', // Points dépensés
  EXPIRED = 'EXPIRED', // Points expirés
  ADJUSTED = 'ADJUSTED', // Ajustement manuel
}

@Entity('loyalty_transactions')
export class LoyaltyTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  loyaltyAccountId: string;

  @ManyToOne(() => LoyaltyAccount, (account) => account.transactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'loyaltyAccountId' })
  loyaltyAccount: LoyaltyAccount;

  @Column({
    type: 'enum',
    enum: LoyaltyTransactionType,
  })
  type: LoyaltyTransactionType;

  @Column({ type: 'int' })
  points: number; // Nombre de points (positif pour EARNED, négatif pour SPENT)

  @Column({ type: 'text', nullable: true })
  description: string; // Description de la transaction

  @Column({ type: 'uuid', nullable: true })
  orderId: string; // Commande associée (si applicable)

  @ManyToOne(() => Order, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column({ type: 'int' })
  balanceAfter: number; // Solde après cette transaction

  @CreateDateColumn()
  createdAt: Date;
}

