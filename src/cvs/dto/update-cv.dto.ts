import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UpdateCvDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  idNumber: string;

  @IsString()
  @IsNotEmpty()
  lgu: string;

  @IsString()
  @IsNotEmpty()
  barangay: string;

  @IsString()
  @IsNotEmpty()
  facilityName: string;

  @IsString()
  @IsNotEmpty()
  formType: string;

  @IsString()
  @IsNotEmpty()
  period: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsOptional()
  @IsString()
  issue?: string;
}
