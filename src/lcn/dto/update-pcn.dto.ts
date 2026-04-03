import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UpdatePcnDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  hhId: string;

  @IsOptional()
  @IsString()
  lgu?: string;

  @IsOptional()
  @IsString()
  barangay?: string;

  @IsOptional()
  @IsString()
  granteeName?: string;

  @IsString()
  @IsNotEmpty()
  subjectOfChange: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsOptional()
  @IsString()
  pcn?: string;

  @IsOptional()
  @IsString()
  lrn?: string;

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
