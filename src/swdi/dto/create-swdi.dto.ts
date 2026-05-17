import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSwdiDto {
  @ApiProperty({ example: '112233-44', description: 'Household ID number' })
  @IsString()
  @IsNotEmpty()
  hhId: string;

  @ApiProperty({
    example: 'Cagayan de Oro',
    description: 'Local Government Unit name',
  })
  @IsString()
  @IsNotEmpty()
  lgu: string;

  @ApiProperty({ example: 'Barangay 1' })
  @IsString()
  @IsNotEmpty()
  barangay: string;

  @ApiProperty({
    example: 'Juan Dela Cruz',
    description: 'Name of the grantee',
  })
  @IsString()
  @IsNotEmpty()
  grantee: string;

  @ApiProperty({ example: 85, description: 'SWDI numerical score' })
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  swdiScore: number;

  @ApiProperty({ example: 'Level 2', description: 'SWDI classification level' })
  @IsString()
  @IsNotEmpty()
  swdiLevel: string;

  @ApiProperty({ example: 'ENCODED', enum: ['ENCODED', 'ISSUE', 'UPDATED'] })
  @IsString()
  @IsNotEmpty()
  remarks: string;

  @ApiPropertyOptional({
    example: 'M&E-0034',
    description: 'Document Reference Number with M&E- prefix',
  })
  @IsOptional()
  @IsString()
  drn: string;

  @ApiProperty({
    example: 'Pedro Reyes',
    description: 'Assigned City Link or SWA name',
  })
  @IsString()
  cl: string;

  @ApiPropertyOptional({ example: 'Incomplete household data' })
  @IsOptional()
  @IsString()
  issue?: string;

  @ApiProperty({
    example: '2024-06-15',
    description: 'Date accomplished (ISO format)',
  })
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiPropertyOptional({ example: 'Pending secondary validation' })
  @IsOptional()
  @IsString()
  note?: string;
}
