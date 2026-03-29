
import { IsString, IsNotEmpty, IsOptional, IsDateString, IsInt } from 'class-validator';

export class CreateMiscDto {
    @IsString()
  @IsNotEmpty()
  lgu: string;

  @IsString()
  @IsNotEmpty()
  barangay: string;

  @IsString()
  @IsNotEmpty()
  hhId: string;

  @IsString()
  @IsNotEmpty()
  granteeName: string;

  @IsString()
  @IsNotEmpty()
  documentType: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsString()
  @IsOptional()
  issue?: string;

  @IsString()
  @IsNotEmpty()
  encodedBy: string;

  @IsString()
  @IsOptional()
  subjectOfChange?: string;

  @IsString()
  @IsOptional()
  drn?: string;

  @IsString()
  @IsOptional()
  cl?: string;

  @IsString()
  @IsOptional()
  note?: string;

}
