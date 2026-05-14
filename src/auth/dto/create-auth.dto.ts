import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({
    example: 'juan.delacruz@dswd.gov.ph',
    description: 'User email address',
  })
  @IsString()
  email: string;

  @ApiProperty({ example: 'P@ssw0rd123', description: 'User password' })
  @IsString()
  password: string;
}
