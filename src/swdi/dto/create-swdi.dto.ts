import { IsString, IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSwdiDto {
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
  drn : string;

  @IsString()
  cl : string;

  @IsOptional()
  @IsString()
  issue?: string;

  @Type(() => Date)
  @IsDate()
  date : Date;

  @IsOptional()
  @IsString()
  note?: string;
}