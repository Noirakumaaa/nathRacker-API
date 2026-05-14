import { IsString, IsNotEmpty, IsDateString, IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAaDocumentDto {
  @ApiProperty({
    example: 'MARY GRACE P. MARTIN',
    description: 'Name of the staff who submitted the document',
  })
  @IsString()
  @IsNotEmpty()
  staffName: string;

  @ApiProperty({
    example:
      'Endorsement of Social Case Study Report for DSWD Central Office review',
  })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiPropertyOptional({
    example: 'OO-2026-001',
    description: 'Operation Order number this document belongs to',
  })
  @IsString()
  @IsOptional()
  operationNum?: string;

  @ApiPropertyOptional({ example: 2026, description: 'Fiscal/calendar year this document belongs to' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2000)
  @Max(2100)
  year?: number;

  @ApiProperty({
    example: '2026-01-05',
    description: 'ISO date string for when the document was created',
  })
  @IsDateString()
  dateCreated: string;
}
