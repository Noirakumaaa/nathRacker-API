// create-lgu.dto.ts
import { IsString, IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateLguDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  operationsOfficeNumId: number;
}