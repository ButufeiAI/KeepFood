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
import { Restaurant } from './restaurant.entity';

/**
 * Client anonyme créé automatiquement lors du scan QR code
 * Pas besoin d'authentification, identifié par un UUID côté client
 */
@Entity('clients')
@Index(['restaurantId', 'identifier'])
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ length: 255, unique: true })
  identifier: string; // UUID généré côté client, stocké dans localStorage

  @Column({ length: 100, nullable: true })
  name: string; // Nom optionnel du client

  @Column({ length: 255, nullable: true })
  email: string; // Email optionnel

  @Column({ length: 50, nullable: true })
  phone: string; // Téléphone optionnel

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastOrderAt: Date; // Date de la dernière commande

  @Column({ type: 'text', nullable: true })
  pushToken: string; // Token pour les notifications push (FCM, Web Push, etc.)

  @Column({ type: 'boolean', default: true })
  notificationsEnabled: boolean; // Le client accepte-t-il les notifications ?
}

