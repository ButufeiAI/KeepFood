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
import { Product } from './product.entity';
import { EstablishmentType } from './establishment-type.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ type: 'uuid' })
  restaurantId: string;

  @ManyToOne(() => Restaurant, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Index()
  @Column({ type: 'uuid', nullable: true })
  establishmentTypeId: string;

  @ManyToOne(() => EstablishmentType, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'establishmentTypeId' })
  establishmentType: EstablishmentType;

  @Index()
  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ type: 'int', default: 0 })
  displayOrder: number; // Pour ordonner les catégories

  @Column({ length: 255, nullable: true })
  parentCategoryId: string; // Pour les sous-catégories

  @Column({ length: 500, nullable: true })
  image: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['ACTIVE', 'EXPIRED'],
    default: 'ACTIVE',
    nullable: true,
  })
  status: 'ACTIVE' | 'EXPIRED'; // Status pour compatibilité template

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}



