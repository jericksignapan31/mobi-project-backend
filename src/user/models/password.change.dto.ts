import { ApiProperty } from "@nestjs/swagger";

export class changePasswordDto {
    @ApiProperty()
    password : string;
}