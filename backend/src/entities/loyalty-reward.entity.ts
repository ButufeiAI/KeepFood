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

export enum RewardType {
  FREE_PRODUCT = 'FREE_PRODUCT', // Produit offert (ex: dessert)
  PERCENTAGE_DISCOUNT = 'PERCENTAGE_DISCOUNT', // Réduction en pourcentage
  FIXED_DISCOUNT = 'FIXED_DISCOUNT', // Réduction fixe (ex: 5€)
}

@Entity('loyalty_rewards')
export class LoyaltyReward {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ length: 255 })
  name: string; // Ex: "Dessert offert", "10% de réduction"

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: RewardType,
  })
  type: RewardType;

  @Column({ type: 'int' })
  pointsRequired: number; // Nombre de points nécessaires

  @Column({ type: 'uuid', nullable: true })
  productId: string; // Produit offert (si type = FREE_PRODUCT)

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  discountPercentage: number; // Pourcentage de réduction (si type = PERCENTAGE_DISCOUNT)

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discountAmount: number; // Montant fixe de réduction (si type = FIXED_DISCOUNT)

  @Column({ type: 'int', nullable: true })
  maxDiscountAmount: number; // Montant maximum de réduction (pour les pourcentages)

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'int', nullable: true })
  maxUsesPerClient: number; // Nombre maximum d'utilisations par client (null = illimité)

  @Column({ type: 'date', nullable: true })
  validFrom: Date; // Date de début de validité

  @Column({ type: 'date', nullable: true })
  validUntil: Date; // Date de fin de validité

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

