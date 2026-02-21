import { PartialType } from '@nestjs/mapped-types';
import { CreateSwdiDto } from './create-swdi.dto.js';

export class UpdateSwdiDto extends PartialType(CreateSwdiDto) {}
