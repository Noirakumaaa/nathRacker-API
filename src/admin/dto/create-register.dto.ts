import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

enum Role {
  ENCODER = 'ENCODER',
  ADMIN = 'ADMIN',
  AC = 'AC',
  SWOIII = 'SWOIII',
  VERIFIER = 'VERIFIER',
}

export class CreateRegisterAccount {
  @ApiProperty({ example: 'Juan', description: 'First name' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Dela Cruz', description: 'Last name' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'Santos', description: 'Middle name' })
  @IsString()
  middleName: string;

  @ApiProperty({
    example: 'jdelacruz',
    description: 'Government-issued username',
  })
  @IsString()
  govUsername: string;

  @ApiProperty({ example: 'juan.delacruz@dswd.gov.ph' })
  @IsString()
  email: string;

  @ApiProperty({ example: 'P@ssw0rd123', description: 'Account password' })
  @IsString()
  password: string;

  @ApiProperty({ example: '09171234567', description: 'Mobile phone number' })
  @IsString()
  phone: string;

  @ApiProperty({
    enum: Role,
    example: Role.ENCODER,
    description: 'User role in the system',
  })
  @IsEnum(Role, {
    message: 'role must be one of: ENCODER, ADMIN, AC, SWOIII, VERIFIER',
  })
  role: Role;

  @ApiPropertyOptional({
    example: 1,
    description: 'ID of the assigned Operations Office',
  })
  @IsOptional()
  @IsNumber()
  assignedOperationId?: number;

  @ApiPropertyOptional({ example: 2, description: 'ID of the assigned LGU' })
  @IsOptional()
  @IsNumber()
  assignedLGUID?: number;

  @ApiPropertyOptional({
    example: 3,
    description: 'ID of the assigned Barangay',
  })
  @IsOptional()
  @IsNumber()
  assignedBarangayId?: number;
}
