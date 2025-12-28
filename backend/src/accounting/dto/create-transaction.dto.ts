import { IsEnum, IsString, IsNumber, IsDateString, IsOptional, IsUUID, Min } from 'class-validator';
import { TransactionType, TransactionCategory } from '../../entities/transaction.entity';

export class CreateTransactionDto {
  @IsUUID()
  restaurantId: string;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsOptional()
  @IsEnum(TransactionCategory)
  category?: TransactionCategory;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsDateString()
  date: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsUUID()
  invoiceId?: string;

  @IsOptional()
  @IsUUID()
  paymentId?: string;

  @IsOptional()
  @IsUUID()
  orderId?: string;
}

