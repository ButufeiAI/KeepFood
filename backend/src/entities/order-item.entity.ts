import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { ProductVariant } from './product-variant.entity';

@Entity('order_items')
export class OrderItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  orderId: string;

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column({ type: 'uuid' })
  productId: string;

  @ManyToOne(() => Product, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'uuid', nullable: true })
  variantId: string; // Variante choisie (taille, option)

  @ManyToOne(() => ProductVariant, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'variantId' })
  variant: ProductVariant;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number; // Prix unitaire au moment de la commande

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number; // quantity * unitPrice

  @Column({ type: 'text', nullable: true })
  notes: string; // Ex: "Sans oignon", "Bien cuit"

  @Column({
    type: 'enum',
    enum: ['PENDING', 'IN_PREPARATION', 'READY', 'CANCELLED'],
    default: 'PENDING',
  })
  itemStatus: 'PENDING' | 'IN_PREPARATION' | 'READY' | 'CANCELLED';

  @CreateDateColumn()
  createdAt: Date;
}



