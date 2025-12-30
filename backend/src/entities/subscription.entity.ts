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
import { Client } from './client.entity';
import { SubscriptionUsage } from './subscription-usage.entity';

export enum SubscriptionType {
  THREE_DAYS = 'THREE_DAYS', // 3 jours / semaine
  FIVE_DAYS = 'FIVE_DAYS', // 5 jours / semaine
  MONTHLY = 'MONTHLY', // Mensuel
}

export enum SubscriptionStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED', // En pause (congé, maladie)
  EXPIRED = 'EXPIRED',
  CANCELLED = 'CANCELLED',
}

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ type: 'uuid' })
  clientId: string;

  @ManyToOne(() => Client, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'clientId' })
  client: Client;

  @Column({
    type: 'enum',
    enum: SubscriptionType,
  })
  type: SubscriptionType;

  @Column({
    type: 'enum',
    enum: SubscriptionStatus,
    default: SubscriptionStatus.ACTIVE,
  })
  status: SubscriptionStatus;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number; // Prix de l'abonnement

  @Column({ type: 'date' })
  startDate: Date; // Date de début

  @Column({ type: 'date', nullable: true })
  endDate: Date; // Date de fin (null pour abonnement sans fin)

  @Column({ type: 'int' })
  totalMeals: number; // Nombre total de repas (ex: 12 pour 3 jours/semaine sur 1 mois)

  @Column({ type: 'int', default: 0 })
  consumedMeals: number; // Nombre de repas consommés

  @Column({ type: 'int', nullable: true })
  mealsPerWeek: number; // Nombre de repas par semaine (3, 5, ou null pour mensuel)

  @Column({ type: 'text', nullable: true })
  preferredDays: string; // JSON array des jours préférés (ex: ["lundi", "mercredi", "vendredi"])

  @Column({ type: 'date', nullable: true })
  pauseStartDate: Date; // Date de début de pause

  @Column({ type: 'date', nullable: true })
  pauseEndDate: Date; // Date de fin de pause

  @Column({ type: 'text', nullable: true })
  pauseReason: string; // Raison de la pause (congé, maladie, etc.)

  @Column({ type: 'boolean', default: false })
  isRecurring: boolean; // Facturation récurrente

  @Column({ type: 'text', nullable: true })
  paymentMethodId: string; // ID du moyen de paiement pour la facturation récurrente

  @OneToMany(() => SubscriptionUsage, (usage) => usage.subscription)
  usages: SubscriptionUsage[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

