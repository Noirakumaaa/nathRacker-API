import { IsInt, IsString, IsNotEmpty, IsDateString } from 'class-validator'

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

  @IsString()
  issue: string

  @IsString()
  period : string
}