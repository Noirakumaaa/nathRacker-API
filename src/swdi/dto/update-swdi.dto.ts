import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSwdiDto {
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
  grantee: string;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  swdiScore: number;

  @IsString()
  @IsNotEmpty()
  swdiLevel: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

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
