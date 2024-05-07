import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodotaskDto } from './create-todotask.dto';

export class UpdateTodotaskDto extends PartialType(CreateTodotaskDto) {
    @ApiProperty()
    title: string;
    done: boolean;
}
