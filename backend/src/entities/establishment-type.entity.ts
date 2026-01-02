import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Category } from './category.entity';

@Entity('establishment_types')
export class EstablishmentType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index()
  @Column({ length: 255, unique: true })
  name: string; // Ex: "Pizzeria", "Snack", "Friterie", "Restaurant", "Gastro Restaurant"

  @Column({ length: 500, nullable: true })
  description: string;

  @Column({ length: 500, nullable: true })
  image: string; // Image pour le type d'établissement

  @Column({
    type: 'enum',
    enum: ['ACTIVE', 'EXPIRED'],
    default: 'ACTIVE',
  })
  status: 'ACTIVE' | 'EXPIRED';

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'int', default: 0 })
  displayOrder: number; // Pour ordonner les types d'établissement

  @OneToMany(() => Category, (category) => category.establishmentType)
  categories: Category[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
