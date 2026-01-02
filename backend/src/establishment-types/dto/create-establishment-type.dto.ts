import { IsString, IsOptional, IsEnum, IsBoolean, IsInt, MaxLength } from 'class-validator';

export enum EstablishmentTypeStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
}

export class CreateEstablishmentTypeDto {
  @IsString()
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  image?: string;

  @IsOptional()
  @IsEnum(EstablishmentTypeStatus)
  status?: EstablishmentTypeStatus;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  displayOrder?: number;
}
