import { PartialType } from '@nestjs/swagger';
import { CreateLeavetypeDto } from './create-leavetype.dto';

export class UpdateLeavetypeDto extends PartialType(CreateLeavetypeDto) {}
