import { PartialType } from '@nestjs/swagger';
import { CreateEmpTrainingDto } from './create-emp-training.dto';

export class UpdateEmpTrainingDto extends PartialType(CreateEmpTrainingDto) {}
