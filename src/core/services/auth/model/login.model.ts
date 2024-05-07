import { ApiProperty } from "@nestjs/swagger";

export class loginDTO {
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}