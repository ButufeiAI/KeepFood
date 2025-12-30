import { IsString, IsEnum, IsInt, IsOptional, IsBoolean, IsUUID, IsNumber, Min, Max } from 'class-validator';
import { RewardType } from '../../entities/loyalty-reward.entity';

export class CreateLoyaltyRewardDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(RewardType)
  type: RewardType;

  @IsInt()
  @Min(1)
  pointsRequired: number;

  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  discountPercentage?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  discountAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  maxDiscountAmount?: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  @Min(1)
  maxUsesPerClient?: number;

  @IsOptional()
  validFrom?: Date;

  @IsOptional()
  validUntil?: Date;
}

