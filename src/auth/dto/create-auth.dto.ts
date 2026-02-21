import { IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
  
  @IsString()
  govUsername: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phone: string;

  @IsString()
  role: 'ENCODER' | 'ADMIN';
}
