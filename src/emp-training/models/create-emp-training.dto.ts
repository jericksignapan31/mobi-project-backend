import { ApiProperty } from "@nestjs/swagger"

export class CreateEmpTrainingDto {
    @ApiProperty()
    title : string
    @ApiProperty()
    date_start : Date
    @ApiProperty()
    date_end : Date
    @ApiProperty()
    no_of_hours : string
    @ApiProperty()
    type_of_ld : string
    @ApiProperty()
    conducted_by : string
    date_updated : Date
    @ApiProperty()
    emp_id : string
    @ApiProperty()
    document_link : string
}
