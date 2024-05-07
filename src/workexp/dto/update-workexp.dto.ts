import { PartialType } from '@nestjs/swagger';
import { CreateWorkexpDto } from './create-workexp.dto';

export class UpdateWorkexpDto extends PartialType(CreateWorkexpDto) {
    work_experience_id: number;
}
