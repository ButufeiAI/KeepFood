import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity('employee_profiles')
export class EmployeeProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true })
  userId: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  // Informations personnelles
  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ length: 100, nullable: true })
  city: string;

  @Column({ length: 20, nullable: true })
  zipCode: string;

  @Column({ length: 100, nullable: true })
  country: string;

  @Column({ length: 255, nullable: true })
  profileImage: string;

  // Contact d'urgence
  @Column({ length: 255, nullable: true })
  emergencyContactName: string;

  @Column({ length: 50, nullable: true })
  emergencyContactPhone: string;

  @Column({ length: 100, nullable: true })
  emergencyContactRelation: string;

  // Informations emploi
  @Column({ type: 'date' })
  hireDate: Date;

  @Column({ type: 'date', nullable: true })
  endDate: Date;

  @Column({
    type: 'enum',
    enum: ['CDI', 'CDD', 'INTERIM', 'STAGE', 'APPRENTISSAGE'],
    default: 'CDI',
  })
  contractType: string;

  @Column({
    type: 'enum',
    enum: ['FULL_TIME', 'PART_TIME', 'SEASONAL'],
    default: 'FULL_TIME',
  })
  workSchedule: string;

  @Column({ length: 255, nullable: true })
  socialSecurityNumber: string;

  @Column({ length: 100, nullable: true })
  department: string;

  @Column({ type: 'uuid', nullable: true })
  managerId: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'managerId' })
  manager: User;

  // Rémunération
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  hourlyRate: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  monthlySalary: number;

  @Column({ length: 10, default: 'EUR' })
  currency: string;

  // Compétences et certifications
  @Column({ type: 'text', nullable: true })
  skills: string; // JSON array

  @Column({ type: 'text', nullable: true })
  certifications: string; // JSON array

  @Column({ type: 'text', nullable: true })
  languages: string; // JSON array

  // Pour livreurs
  @Column({ length: 100, nullable: true })
  driverLicense: string;

  @Column({ type: 'date', nullable: true })
  driverLicenseExpiry: Date;

  @Column({ length: 50, nullable: true })
  vehiclePlate: string;

  @Column({ length: 100, nullable: true })
  vehicleType: string;

  // Disponibilités
  @Column({ type: 'text', nullable: true })
  availability: string; // JSON

  // Performance
  @Column({ type: 'decimal', precision: 3, scale: 2, default: 0 })
  performanceRating: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

