import { PartialType } from '@nestjs/mapped-types';
import { CreatePcnDto } from './create-pcn.dto.js';

export class UpdatePcnDto extends PartialType(CreatePcnDto) {}
