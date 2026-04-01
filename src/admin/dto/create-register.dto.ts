import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateRegisterAccount {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  middleName: string;

  @IsString()
  govUsername: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsString()
  role: 'ENCODER' | 'ADMIN';

  @IsOptional()
  @IsNumber()
  assignedOperationId?: number;

  @IsOptional()
  @IsNumber()
  assignedLGUID?: number;

  @IsOptional()
  @IsNumber()
  assignedBarangayId?: number;
}
