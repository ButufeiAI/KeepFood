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
import { Order } from './order.entity';

@Entity('tables')
export class Table {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ length: 50 })
  name: string; // Ex: "Table 1", "T1", "Terrasse 3"

  @Column({ type: 'int', default: 4 })
  capacity: number;

  @Column({ length: 500, nullable: true })
  qrCode: string; // URL or data for QR code

  @Column({ length: 255, nullable: true })
  zone: string; // Ex: "Salle principale", "Terrasse", "Bar"

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => Order, (order) => order.table)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}



