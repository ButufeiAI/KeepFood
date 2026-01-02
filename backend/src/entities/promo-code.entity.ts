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

export enum PromoCodeType {
  PERCENTAGE = 'PERCENTAGE', // Réduction en pourcentage
  FIXED = 'FIXED', // Réduction fixe
  FREE_SHIPPING = 'FREE_SHIPPING', // Livraison gratuite
}

@Entity('promo_codes')
export class PromoCode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ length: 50, unique: true })
  code: string; // Code unique (ex: "SUMMER2024")

  @Column({ length: 255 })
  name: string; // Nom de la promotion

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: PromoCodeType,
  })
  type: PromoCodeType;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  discountValue: number; // Pourcentage ou montant fixe selon le type

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  minOrderAmount: number; // Montant minimum de commande requis

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  maxDiscountAmount: number; // Montant maximum de réduction (pour les pourcentages)

  @Column({ type: 'date', nullable: true })
  validFrom: Date; // Date de début de validité

  @Column({ type: 'date', nullable: true })
  validUntil: Date; // Date de fin de validité

  @Column({ type: 'int', nullable: true })
  maxUses: number; // Nombre maximum d'utilisations (null = illimité)

  @Column({ type: 'int', default: 0 })
  usedCount: number; // Nombre d'utilisations actuelles

  @Column({ type: 'int', nullable: true })
  maxUsesPerClient: number; // Nombre maximum d'utilisations par client

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'jsonb', nullable: true })
  applicableProducts: string[]; // IDs des produits concernés (null = tous)

  @Column({ type: 'jsonb', nullable: true })
  applicableCategories: string[]; // IDs des catégories concernées (null = toutes)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
