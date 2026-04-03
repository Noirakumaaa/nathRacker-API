import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UpdateMiscDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  hhId: string;

  @IsString()
  @IsNotEmpty()
  lgu: string;

  @IsString()
  @IsNotEmpty()
  barangay: string;

  @IsString()
  @IsNotEmpty()
  granteeName: string;

  @IsString()
  @IsNotEmpty()
  documentType: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsOptional()
  @IsString()
  subjectOfChange?: string;

  @IsOptional()
  @IsString()
  drn?: string;

  @IsOptional()
  @IsString()
  cl?: string;

  @IsOptional()
  @IsString()
  issue?: string;

  @IsOptional()
  @IsString()
  note?: string;
}
