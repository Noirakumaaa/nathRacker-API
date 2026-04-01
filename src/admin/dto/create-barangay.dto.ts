// create-barangay.dto.ts
import { IsString, IsNotEmpty, IsInt, IsPositive } from 'class-validator';

export class CreateBarangayDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  lguId: number;
}