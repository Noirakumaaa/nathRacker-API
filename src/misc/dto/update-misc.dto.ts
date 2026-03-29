import { PartialType } from '@nestjs/mapped-types';
import { CreateMiscDto } from './create-misc.dto.js';

export class UpdateMiscDto extends PartialType(CreateMiscDto) {}
