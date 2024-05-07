import { PartialType } from '@nestjs/swagger';
import { CreateLeaverequestDto } from './create-leaverequest.dto';

export class UpdateLeaverequestDto extends PartialType(CreateLeaverequestDto) {}
