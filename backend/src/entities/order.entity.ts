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
import { User } from './user.entity';
import { OrderStatus } from '../common/enums/order-status.enum';
import { OrderItem } from './order-item.entity';
import { Payment } from './payment.entity';
import { TableSession } from './table-session.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ type: 'uuid', nullable: true })
  tableId: string;

  @ManyToOne(() => Table, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'tableId' })
  table: Table;

  @Column({ type: 'uuid', nullable: true })
  tableSessionId: string; // Session de table pour grouper les commandes

  @ManyToOne(() => TableSession, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'tableSessionId' })
  tableSession: TableSession;

  @Column({ type: 'uuid', nullable: true })
  userId: string; // Client qui a commandé (peut être null si client anonyme)

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ length: 255, nullable: true })
  clientName: string; // Nom du client (pour les clients non enregistrés)

  @Column({ length: 255, nullable: true })
  clientIdentifier: string; // Identifiant unique client (généré côté client, stocké dans localStorage)

  @Column({ type: 'uuid', nullable: true })
  serverId: string; // Serveur qui a pris/géré la commande

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'serverId' })
  server: User;

  @Index()
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  })
  status: OrderStatus;

  @Column({
    type: 'enum',
    enum: ['ON_SITE', 'TAKEAWAY', 'DELIVERY'],
    default: 'ON_SITE',
  })
  orderType: 'ON_SITE' | 'TAKEAWAY' | 'DELIVERY';

  @Column({ type: 'text', nullable: true })
  notes: string; // Remarques du client

  @Index()
  @Column({ length: 50, nullable: true })
  orderNumber: string; // Numéro de commande formaté (ex: "#23588")

  @Index()
  @Column({ length: 20, nullable: true })
  tokenNumber: string; // Token/Numéro de commande pour affichage (ex: "16")

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Index()
  @Column({ type: 'boolean', default: false })
  isPaid: boolean;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items: OrderItem[];

  @OneToMany(() => Payment, (payment) => payment.order)
  payments: Payment[];

  @Index()
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}



