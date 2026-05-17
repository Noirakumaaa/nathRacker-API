import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsInt,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMiscDto {
  @IsOptional()
  @IsString()
  lgu: string;

  @IsOptional()
  @IsString()
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

  @Type(() => Date)
  @IsDate()
  date: Date;
}
