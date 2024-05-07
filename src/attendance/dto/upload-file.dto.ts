import { ApiProperty } from "@nestjs/swagger";

export class uploadFileDTO{
    @ApiProperty({description: 'File to upload'})
    file: File;
}