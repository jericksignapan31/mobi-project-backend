import { PartialType } from '@nestjs/swagger';
import { CreateDocuDto } from './create-docu.dto';

export class UpdateDocuDto extends PartialType(CreateDocuDto) {}
