import { PartialType } from '@nestjs/swagger';
import { CreateOtrequestDto } from './create-otrequest.dto';

export class UpdateOtrequestDto extends PartialType(CreateOtrequestDto) {}
