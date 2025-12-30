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
import { Table } from './table.entity';
import { Order } from './order.entity';

export enum TableSessionStatus {
  ACTIVE = 'ACTIVE',
  CLOSED = 'CLOSED',
  PAID = 'PAID',
}

@Entity('table_sessions')
@Index(['tableId', 'status'])
export class TableSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ type: 'uuid' })
  tableId: string;

  @ManyToOne(() => Table, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tableId' })
  table: Table;

  @Column({
    type: 'enum',
    enum: TableSessionStatus,
    default: TableSessionStatus.ACTIVE,
  })
  status: TableSessionStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  totalAmount: number; // Total de toutes les commandes dans cette session

  @Column({ type: 'boolean', default: false })
  isPaid: boolean;

  @Column({ type: 'text', nullable: true })
  notes: string; // Notes générales pour la session

  @OneToMany(() => Order, (order) => order.tableSession)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  closedAt: Date; // Quand la session a été fermée
}

