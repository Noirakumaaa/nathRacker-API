import { IsString, IsOptional, IsDateString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAaDocumentDto {
  @ApiPropertyOptional({ example: 'MARY GRACE P. MARTIN' })
  @IsString()
  @IsOptional()
  staffName?: string;

  @ApiPropertyOptional({ example: 'Updated subject text' })
  @IsString()
  @IsOptional()
  subject?: string;

  @ApiPropertyOptional({ example: 'OO-2026-001' })
  @IsString()
  @IsOptional()
  operationNum?: string;

  @ApiPropertyOptional({ example: 2026 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2000)
  @Max(2100)
  year?: number;

  @ApiPropertyOptional({ example: '2026-01-05' })
  @IsDateString()
  @IsOptional()
  dateCreated?: string;

  @ApiPropertyOptional({ example: '2026-03-10' })
  @IsDateString()
  @IsOptional()
  dateSubmittedJnt?: string;

  @ApiPropertyOptional({ example: 'Level 1' })
  @IsString()
  @IsOptional()
  oo8Level?: string;
}
