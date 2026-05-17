import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAaRemarkDto {
  @ApiProperty({
    example: 'received/endorsed to AC 1/7/26',
    description: 'Remark content',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiPropertyOptional({
    example: '2026-01-07',
    description: 'Optional explicit date for this remark',
  })
  @IsDateString()
  @IsOptional()
  remarkDate?: string;
}
