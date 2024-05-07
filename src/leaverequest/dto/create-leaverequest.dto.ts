import { ApiProperty } from "@nestjs/swagger"

export class CreateLeaverequestDto {
    @ApiProperty()
    emp_id : string
    @ApiProperty()
    leave_type_id : number
    @ApiProperty()
    date_start : Date
    @ApiProperty()
    date_end : Date
    @ApiProperty()
    reason : string
    @ApiProperty()
    status : string
    date_updated : Date
    @ApiProperty()
    support_file : string
    @ApiProperty()
    with_pay : boolean
    @ApiProperty()
    sum_leavedate : number
}
