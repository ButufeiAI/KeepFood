import { IsString, IsOptional } from 'class-validator';

export class ApplyPromoCodeDto {
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  clientIdentifier?: string; // Pour les clients non authentifiés

  @IsOptional()
  @IsString()
  orderId?: string; // Pour appliquer à une commande existante
}
