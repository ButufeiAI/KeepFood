import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { PromoCode } from './promo-code.entity';
import { Order } from './order.entity';
import { Client } from './client.entity';

@Entity('promo_code_usage')
export class PromoCodeUsage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  promoCodeId: string;

  @ManyToOne(() => PromoCode, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'promoCodeId' })
  promoCode: PromoCode;

  @Index()
  @Column({ type: 'uuid', nullable: true })
  orderId: string;

  @ManyToOne(() => Order, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Index()
  @Column({ type: 'uuid', nullable: true })
  clientId: string;

  @ManyToOne(() => Client, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @Column({ type: 'varchar', length: 255, nullable: true })
  clientIdentifier: string; // Pour les clients non authentifiés

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  discountAmount: number; // Montant de la réduction appliquée

  @CreateDateColumn()
  usedAt: Date;
}
