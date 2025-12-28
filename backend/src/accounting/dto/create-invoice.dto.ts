import { IsEnum, IsString, IsNumber, IsDateString, IsOptional, IsUUID, IsBoolean, Min } from 'class-validator';
import { InvoiceType, InvoiceStatus } from '../../entities/invoice.entity';

export class CreateInvoiceDto {
  @IsUUID()
  restaurantId: string;

  @IsEnum(InvoiceType)
  type: InvoiceType;

  @IsString()
  recipientName: string;

  @IsOptional()
  @IsString()
  recipientEmail?: string;

  @IsOptional()
  @IsString()
  recipientAddress?: string;

  @IsOptional()
  @IsString()
  recipientVatNumber?: string;

  @IsNumber()
  @Min(0)
  subtotal: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  taxAmount?: number;

  @IsNumber()
  @Min(0)
  totalAmount: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  taxRate?: number;

  @IsDateString()
  issueDate: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsUUID()
  orderId?: string;

  @IsOptional()
  @IsBoolean()
  peppolEnabled?: boolean;
}

