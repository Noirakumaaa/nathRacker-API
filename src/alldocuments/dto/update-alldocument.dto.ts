import { PartialType } from '@nestjs/mapped-types';
import { CreateAlldocumentDto } from './create-alldocument.dto.js';

export class UpdateAlldocumentDto extends PartialType(CreateAlldocumentDto) {}
