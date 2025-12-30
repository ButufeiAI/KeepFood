import { IsUUID, IsOptional, IsDateString, IsString } from 'class-validator';

export class UseSubscriptionDto {
  @IsUUID()
  subscriptionId: string;

  @IsOptional()
  @IsDateString()
  usageDate?: string; // Si non fourni, utilise la date actuelle

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsUUID()
  orderId?: string; // Commande associée
}

