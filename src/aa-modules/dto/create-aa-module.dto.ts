import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAaModuleDto {
  @ApiProperty({
    example: 'BDM',
    description: 'Unique module code used in tracking numbers and URLs',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    example: 'Barangay Document Monitoring',
    description: 'Full display name of the module',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'BDM',
    description: 'Prefix used when generating tracking numbers (e.g. BDM-0001)',
  })
  @IsString()
  @IsNotEmpty()
  prefix: string;

  @ApiPropertyOptional({ example: 'Tracks barangay-related documents' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiPropertyOptional({ example: 'Name of Staff' })
  @IsString()
  @IsOptional()
  colStaff?: string;

  @ApiPropertyOptional({ example: 'Title of Documents' })
  @IsString()
  @IsOptional()
  colSubject?: string;

  @ApiPropertyOptional({ example: 'Activity Documentation' })
  @IsString()
  @IsOptional()
  colActivity?: string;
}
