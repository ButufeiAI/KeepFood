import { IsEnum, IsUUID, IsNumber, IsDateString, IsOptional, IsInt, IsBoolean, IsArray, IsString, Min } from 'class-validator';
import { SubscriptionType } from '../../entities/subscription.entity';

export class CreateSubscriptionDto {
  @IsUUID()
  clientId: string;

  @IsEnum(SubscriptionType)
  type: SubscriptionType;

  @IsNumber()
  @Min(0)
  price: number;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsInt()
  @Min(1)
  totalMeals: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  mealsPerWeek?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  preferredDays?: string[]; // ["lundi", "mercredi", "vendredi"]

  @IsOptional()
  @IsBoolean()
  isRecurring?: boolean;

  @IsOptional()
  @IsString()
  paymentMethodId?: string;
}

