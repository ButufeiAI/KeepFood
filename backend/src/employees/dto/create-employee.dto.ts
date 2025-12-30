import { IsString, IsArray, IsOptional, IsUUID, IsBoolean, IsDateString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  role: string;

  @IsDateString()
  hireDate: string;

  @IsString()
  @IsOptional()
  contractType?: string;

  @IsString()
  @IsOptional()
  workSchedule?: string;

  @IsString()
  @IsOptional()
  department?: string;

  @IsOptional()
  hourlyRate?: number;

  @IsOptional()
  monthlySalary?: number;
}

