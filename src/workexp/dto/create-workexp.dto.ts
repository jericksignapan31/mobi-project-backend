import { ApiProperty } from "@nestjs/swagger"

export class CreateWorkexpDto {
    @ApiProperty()
    company_name       : string
    @ApiProperty()
    position           : string
    @ApiProperty()
    date_started       : Date
    @ApiProperty()
    date_ended         : Date
    @ApiProperty()
    monthly_salary : string
    goverment_service  : string
    @ApiProperty()
    status_appointment : string
    @ApiProperty()
    file_link        : string
    @ApiProperty()
    emp_id : string
}
