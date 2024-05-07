import { ApiProperty } from "@nestjs/swagger"

export class CreateDocuDto {
    @ApiProperty()
    document_name : string
    @ApiProperty()
    file_link : string
    @ApiProperty()
    emp_id : string
    @ApiProperty()
    status : string
    @ApiProperty()
    doc_gov_id : string
    employee : {}
}
