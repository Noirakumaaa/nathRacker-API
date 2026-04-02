import { IsString, IsNotEmpty, IsOptional, IsDateString, IsInt } from 'class-validator';

export class CreateBusDto {
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
  typeOfUpdate: string;

  @IsString()
  @IsNotEmpty()
  updateInfo: string;

  @IsString()
  @IsNotEmpty()
  remarks: string;

  @IsString()
  @IsOptional()
  issue?: string;

  @IsString()
  @IsNotEmpty()
  subjectOfChange: string;

  @IsString()
  @IsNotEmpty()
  drn: string;

  @IsString()
  @IsOptional()
  cl: string;
  @IsString()
  @IsOptional()
  verified?: 'YES' | 'ISSUE';
  
  @IsString()
  @IsOptional()
  verificationIssue?: string;


  @IsString()
  @IsOptional()
  note?: string;
}
