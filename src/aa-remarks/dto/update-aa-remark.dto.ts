import { IsString, IsOptional, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAaRemarkDto {
  @ApiPropertyOptional({ example: 'signed by AC/endorsed to MMVM 1/21/26' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({ example: '2026-01-21' })
  @IsDateString()
  @IsOptional()
  remarkDate?: string;
}
