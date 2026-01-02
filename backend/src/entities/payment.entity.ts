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
import { Order } from './order.entity';
import { Restaurant } from './restaurant.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  orderId: string;

  @ManyToOne(() => Order, (order) => order.payments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: ['CASH', 'CARD_TERMINAL', 'ONLINE', 'WALLET'],
    default: 'CASH',
  })
  paymentMethod: 'CASH' | 'CARD_TERMINAL' | 'ONLINE' | 'WALLET';

  @Column({
    type: 'enum',
    enum: ['PENDING', 'SUCCESS', 'FAILED', 'REFUNDED'],
    default: 'PENDING',
  })
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUNDED';

  @Column({ length: 255, nullable: true })
  provider: string; // Ex: "Viva Wallet", "Payconiq", "Stripe"

  @Index()
  @Column({ length: 255, nullable: true })
  transactionId: string; // ID de transaction du fournisseur

  @Column({ length: 50, nullable: true })
  formattedTransactionId: string; // ID formaté pour affichage (ex: "#23588")

  @Column({ length: 20, nullable: true })
  tokenNumber: string; // Token associé à la commande

  @Column({ type: 'text', nullable: true })
  metadata: string; // JSON avec données supplémentaires

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}



