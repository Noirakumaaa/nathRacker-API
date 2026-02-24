import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

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

  @IsInt()
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
  issue?: string;

  @IsOptional()
  @IsString()
  note?: string;
}