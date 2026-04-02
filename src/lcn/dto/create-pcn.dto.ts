import { IsOptional, IsString ,IsDate} from 'class-validator'
import { Type } from 'class-transformer';
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

  @Type(() => Date)
  @IsDate()
  date : Date;


  @IsOptional()
  @IsString()
  note?: string


}