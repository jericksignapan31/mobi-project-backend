import { ApiProperty } from "@nestjs/swagger";

export class CreatePositionDto {
    @ApiProperty()
    position_name: string;
}
