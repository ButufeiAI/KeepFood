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

export enum TaxType {
  INCLUSIVE = 'INCLUSIVE', // Taxe incluse dans le prix
  EXCLUSIVE = 'EXCLUSIVE', // Taxe ajoutée au prix
}

@Entity('tax_settings')
export class TaxSetting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ length: 100 })
  name: string; // Nom de la taxe (ex: "CGST", "SGST", "IGST", "VAT", "Service Tax")

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  rate: number; // Taux de taxe en pourcentage (ex: 9, 18, 10)

  @Column({
    type: 'enum',
    enum: TaxType,
    default: TaxType.EXCLUSIVE,
  })
  type: TaxType; // INCLUSIVE ou EXCLUSIVE

  @Column({ type: 'int', default: 0 })
  displayOrder: number; // Ordre d'affichage

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
