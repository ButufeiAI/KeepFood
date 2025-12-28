import {
  IsString,
  IsOptional,
  IsInt,
  IsBoolean,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateTableDto {
  @IsUUID()
  restaurantId: string;

  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  capacity?: number;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  qrCode?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  zone?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}



