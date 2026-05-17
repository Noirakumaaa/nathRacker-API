import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAaModuleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  prefix: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  colStaff?: string;

  @IsString()
  @IsOptional()
  colSubject?: string;

  @IsString()
  @IsOptional()
  colActivity?: string;
}
