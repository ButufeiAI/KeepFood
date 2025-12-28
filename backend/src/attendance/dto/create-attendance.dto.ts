import { IsOptional, IsDateString } from 'class-validator';

export class CreateAttendanceDto {
  @IsDateString()
  date: string; // Date du pointage (YYYY-MM-DD)

  @IsOptional()
  @IsDateString()
  checkIn?: string; // Heure d'entrée (timestamp)

  @IsOptional()
  @IsDateString()
  checkOut?: string; // Heure de sortie (timestamp)

  @IsOptional()
  notes?: string;
}

