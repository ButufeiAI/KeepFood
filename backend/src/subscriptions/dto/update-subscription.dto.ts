import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionDto } from './create-subscription.dto';
import { IsEnum, IsOptional, IsDateString, IsString, IsInt } from 'class-validator';
import { SubscriptionStatus } from '../../entities/subscription.entity';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {
  @IsOptional()
  @IsEnum(SubscriptionStatus)
  status?: SubscriptionStatus;

  @IsOptional()
  @IsInt()
  consumedMeals?: number;

  @IsOptional()
  @IsDateString()
  pauseStartDate?: string;

  @IsOptional()
  @IsDateString()
  pauseEndDate?: string;

  @IsOptional()
  @IsString()
  pauseReason?: string;
}

