import { IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  role?: 'ENCODER' | 'ADMIN';

  @IsOptional()
  @IsNumber()
  assignedOperationId?: number | null;

  @IsOptional()
  @IsNumber()
  assignedLGUID?: number | null;

  @IsOptional()
  @IsNumber()
  assignedBarangayId?: number | null;
}
