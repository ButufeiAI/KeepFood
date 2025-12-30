import { IsUUID, IsOptional } from 'class-validator';

export class UseRewardDto {
  @IsUUID()
  rewardId: string;

  @IsOptional()
  @IsUUID()
  orderId?: string; // Pour appliquer la récompense à une commande
}

