import { PartialType } from '@nestjs/mapped-types';
import { CreateEstablishmentTypeDto } from './create-establishment-type.dto';

export class UpdateEstablishmentTypeDto extends PartialType(CreateEstablishmentTypeDto) {}
