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
import { User } from './user.entity';
import { Table } from './table.entity';
import { Restaurant } from './restaurant.entity';

@Entity('table_assignments')
@Index(['userId', 'isActive'])
export class TableAssignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string; // ID du serveur

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'uuid' })
  tableId: string; // ID de la table

  @ManyToOne(() => Table, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tableId' })
  table: Table;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ type: 'boolean', default: true })
  isActive: boolean; // Si l'attribution est active

  @Column({ type: 'date', nullable: true })
  startDate: Date; // Date de début d'attribution

  @Column({ type: 'date', nullable: true })
  endDate: Date; // Date de fin d'attribution (si temporaire)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

