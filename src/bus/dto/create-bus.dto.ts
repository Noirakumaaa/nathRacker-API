import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
  IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBusDto {
  @ApiProperty({
    example: 'Cagayan de Oro',
    description: 'Local Government Unit name',
  })
  @IsString()
  @IsNotEmpty()
  lgu: string;

  @ApiProperty({ example: 'Barangay 1', description: 'Barangay name or ID' })
  @IsString()
  @IsNotEmpty()
  barangay: string;

  @ApiProperty({ example: '112233-44', description: 'Household ID number' })
  @IsString()
  @IsNotEmpty()
  hhId: string;

  @ApiProperty({
    example: 'Juan Dela Cruz',
    description: 'Name of the program grantee',
  })
  @IsString()
  @IsNotEmpty()
  granteeName: string;

  @ApiProperty({ example: 'A1', description: 'Type of update code' })
  @IsString()
  @IsNotEmpty()
  typeOfUpdate: string;

  @ApiProperty({ example: 'Changed middle name from Santos to Reyes' })
  @IsString()
  @IsNotEmpty()
  updateInfo: string;

  @ApiProperty({
    example: 'ENCODED',
    enum: ['ENCODED', 'ISSUE', 'UPDATED'],
    description: 'Encoding status',
  })
  @IsString()
  @IsNotEmpty()
  remarks: string;

  @ApiPropertyOptional({ example: 'Missing supporting document' })
  @IsString()
  @IsOptional()
  issue?: string;

  @ApiProperty({
    example: 'Name Correction',
    description: 'Subject of the change being recorded',
  })
  @IsString()
  @IsNotEmpty()
  subjectOfChange: string;

  @ApiProperty({
    example: 'BDM-0012',
    description: 'Document Reference Number with BDM- prefix',
  })
  @IsString()
  @IsNotEmpty()
  drn: string;

  @ApiPropertyOptional({
    example: 'Maria Santos',
    description: 'Assigned City Link or SWA name',
  })
  @IsString()
  @IsOptional()
  cl: string;

  @ApiPropertyOptional({
    example: 'YES',
    enum: ['YES', 'ISSUE'],
    description: 'Verification status',
  })
  @IsString()
  @IsOptional()
  verified?: 'YES' | 'ISSUE';

  @ApiPropertyOptional({ example: 'Duplicate entry found' })
  @IsString()
  @IsOptional()
  verificationIssue?: string;

  @ApiPropertyOptional({ example: 'For follow-up next week' })
  @IsString()
  @IsOptional()
  note?: string;
}
