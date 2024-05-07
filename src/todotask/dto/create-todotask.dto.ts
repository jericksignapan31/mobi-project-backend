import { ApiProperty } from "@nestjs/swagger";

export class CreateTodotaskDto {
    @ApiProperty()
    title: string;
}
