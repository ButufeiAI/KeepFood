import { IsString, IsArray, IsOptional, IsUUID, IsBoolean } from 'class-validator';

export class AssignTablesDto {
  @IsUUID()
  userId: string;

  @IsArray()
  @IsUUID('4', { each: true })
  tableIds: string[];

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

