import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Subscription } from './subscription.entity';
import { Order } from './order.entity';

@Entity('subscription_usages')
export class SubscriptionUsage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  subscriptionId: string;

  @ManyToOne(() => Subscription, (subscription) => subscription.usages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'subscriptionId' })
  subscription: Subscription;

  @Column({ type: 'uuid', nullable: true })
  orderId: string; // Commande associée à l'utilisation

  @ManyToOne(() => Order, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column({ type: 'date' })
  usageDate: Date; // Date d'utilisation du repas

  @Column({ type: 'text', nullable: true })
  notes: string; // Notes optionnelles

  @CreateDateColumn()
  createdAt: Date;
}

