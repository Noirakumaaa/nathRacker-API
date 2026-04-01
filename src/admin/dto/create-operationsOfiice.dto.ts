// create-operations-office-num.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOperationsOfficeNumDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}