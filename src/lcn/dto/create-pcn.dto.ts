import { IsInt, IsOptional, IsString, IsDateString } from 'class-validator'

export class CreatePcnDto {
  @IsOptional()
  @IsString()
  lgu?: string

  @IsOptional()
  @IsString()
  barangay?: string

  @IsString()
  hhId: string

  @IsOptional()
  @IsString()
  granteeName?: string

  @IsString()
  remarks: string

  @IsOptional()
  @IsString()
  issue?: string

  @IsString()
  encodedBy: string

  @IsString()
  subjectOfChange: string

  @IsOptional()
  @IsString()
  pcn?: string

  @IsOptional()
  @IsString()
  lrn?: string

  @IsOptional()
  @IsString()
  drn?: string

  @IsOptional()
  @IsString()
  cl?: string


  @IsOptional()
  @IsString()
  note?: string


}