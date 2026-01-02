import { IsString, IsUUID, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreateZoneAssignmentDto {
  @IsString()
  zone: string;

  @IsUUID()
  employeeId: string;

  @IsUUID()
  restaurantId: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateZoneAssignmentDto {
  @IsString()
  @IsOptional()
  zone?: string;

  @IsUUID()
  @IsOptional()
  employeeId?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class AssignMultipleEmployeesDto {
  @IsString()
  zone: string;

  @IsArray()
  @IsUUID('4', { each: true })
  employeeIds: string[];

  @IsUUID()
  restaurantId: string;
}
