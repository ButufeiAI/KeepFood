import {
  IsString,
  IsOptional,
  IsInt,
  IsBoolean,
  IsUUID,
  IsNumber,
  IsEnum,
  IsArray,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsUUID()
  categoryId: string;

  @IsString()
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsString()
  shortDescription?: string;

  @IsOptional()
  @IsString()
  fullDescription?: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  allergens?: string; // JSON array

  @IsOptional()
  @IsString()
  tags?: string; // JSON array

  @IsOptional()
  @IsEnum(['FOOD', 'DRINK'])
  type?: 'FOOD' | 'DRINK';

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  displayOrder?: number;

  @IsOptional()
  @IsArray()
  images?: Array<{ url: string; isPrimary?: boolean; displayOrder?: number }>;

  @IsOptional()
  @IsArray()
  variants?: Array<{
    name: string;
    priceModifier: number;
    isAvailable?: boolean;
  }>;
}



