import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeProfile } from './employee-profile.entity';
import { Restaurant } from './restaurant.entity';

@Entity('zone_assignments')
export class ZoneAssignment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zone: string;

  @Column('uuid')
  employeeId: string;

  @ManyToOne(() => EmployeeProfile, { eager: true })
  @JoinColumn({ name: 'employeeId' })
  employee: EmployeeProfile;

  @Column('uuid')
  restaurantId: string;

  @ManyToOne(() => Restaurant)
  @JoinColumn({ name: 'restaurantId' })
  restaurant: Restaurant;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
