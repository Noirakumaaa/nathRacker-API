import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator'
import { Type } from 'class-transformer'
export class CreateCvDto {
  @IsString()
  idNumber: string

  @IsString()
  @IsNotEmpty()
  lgu: string

  @IsString()
  @IsNotEmpty()
  barangay: string

  @IsString()
  @IsNotEmpty()
  facilityName: string

  @IsString()
  @IsNotEmpty()
  formType: string

  @IsString()
  remarks: string

  @IsOptional()
  @IsString()
  issue: string

  @IsString()
  period : string

  @Type(() => Date)
  @IsDate()
  date : Date
}