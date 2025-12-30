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
import { LoyaltyTransaction } from './loyalty-transaction.entity';

@Entity('loyalty_accounts')
@Index(['restaurantId', 'clientId'], { unique: true })
export class LoyaltyAccount {
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

  @Column({ type: 'int', default: 0 })
  points: number; // Points actuels du client

  @Column({ type: 'int', default: 0 })
  totalPointsEarned: number; // Total des points gagnés (historique)

  @Column({ type: 'int', default: 0 })
  totalPointsSpent: number; // Total des points dépensés (historique)

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => LoyaltyTransaction, (transaction) => transaction.loyaltyAccount)
  transactions: LoyaltyTransaction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

