import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Client } from './client.entity';
import { Order } from './order.entity';

export enum NotificationType {
  ORDER_READY = 'ORDER_READY',
  ORDER_CONFIRMED = 'ORDER_CONFIRMED',
  PROMOTION = 'PROMOTION',
  LOYALTY_REWARD = 'LOYALTY_REWARD',
  ORDER_DELAYED = 'ORDER_DELAYED',
  GENERAL = 'GENERAL',
}

@Entity('client_notifications')
@Index(['clientId', 'read'])
export class ClientNotification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  clientId: string;

  @ManyToOne(() => Client, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @Column({
    type: 'enum',
    enum: NotificationType,
  })
  type: NotificationType;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'uuid', nullable: true })
  orderId: string; // Lien vers la commande si applicable

  @ManyToOne(() => Order, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column({ type: 'boolean', default: false })
  read: boolean;

  @Column({ type: 'json', nullable: true })
  data: any; // Données supplémentaires (lien, promotion, etc.)

  @CreateDateColumn()
  createdAt: Date;
}

