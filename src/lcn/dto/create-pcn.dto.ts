import { IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePcnDto {
  @ApiPropertyOptional({ example: 'Cagayan de Oro' })
  @IsOptional() @IsString()
  lgu?: string;

  @ApiPropertyOptional({ example: 'Barangay 1' })
  @IsOptional() @IsString()
  barangay?: string;

  @ApiProperty({ example: '112233-44', description: 'Household ID number' })
  @IsString()
  hhId: string;

  @ApiPropertyOptional({ example: 'Juan Dela Cruz' })
  @IsOptional() @IsString()
  granteeName?: string;

  @ApiProperty({ example: 'ENCODED', enum: ['ENCODED', 'ISSUE', 'UPDATED'] })
  @IsString()
  remarks: string;

  @ApiPropertyOptional({ example: 'Missing PCN number' })
  @IsOptional() @IsString()
  issue?: string;

  @ApiProperty({ example: 'jdelacruz', description: 'govUsername of the encoder' })
  @IsString()
  encodedBy: string;

  @ApiProperty({ example: 'Name Correction', description: 'Subject of the change' })
  @IsString()
  subjectOfChange: string;

  @ApiPropertyOptional({ example: 'PCN-2024-001', description: 'PCN reference number' })
  @IsOptional() @IsString()
  pcn?: string;

  @ApiPropertyOptional({ example: 'LRN-00123', description: 'Learner Reference Number' })
  @IsOptional() @IsString()
  lrn?: string;

  @ApiPropertyOptional({ example: 'BDM-0012', description: 'Document Reference Number' })
  @IsOptional() @IsString()
  drn?: string;

  @ApiPropertyOptional({ example: 'Maria Santos', description: 'Assigned City Link or SWA' })
  @IsOptional() @IsString()
  cl?: string;

  @ApiProperty({ example: '2024-06-15', description: 'Date accomplished (ISO format)' })
  @Type(() => Date) @IsDate()
  date: Date;

  @ApiPropertyOptional({ example: 'Needs re-verification' })
  @IsOptional() @IsString()
  note?: string;
}
