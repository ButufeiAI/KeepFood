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
import { Restaurant } from './restaurant.entity';

// Note: Import de User pour approvedBy - déjà présent

@Entity('attendances')
@Index(['userId', 'date'])
export class Attendance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ type: 'date' })
  date: Date; // Date du pointage

  @Column({ type: 'timestamp', nullable: true })
  checkIn: Date; // Heure d'entrée

  @Column({ type: 'timestamp', nullable: true })
  checkOut: Date; // Heure de sortie

  @Column({ type: 'int', nullable: true, default: 0 })
  totalMinutes: number; // Total des minutes travaillées

  @Column({ type: 'text', nullable: true })
  notes: string; // Notes (retard, absence, etc.)

  // Système d'approbation
  @Column({
    type: 'enum',
    enum: ['PENDING', 'APPROVED', 'REJECTED'],
    default: 'PENDING',
  })
  approvalStatus: 'PENDING' | 'APPROVED' | 'REJECTED';

  @Column({ type: 'uuid', nullable: true })
  approvedById: string; // Admin qui a approuvé

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'approvedById' })
  approvedBy: User;

  @Column({ type: 'timestamp', nullable: true })
  approvedAt: Date; // Date d'approbation

  @Column({ type: 'text', nullable: true })
  rejectionReason: string; // Raison du rejet si rejeté

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

