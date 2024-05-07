import { ApiProperty } from "@nestjs/swagger";

export class CreateOtrequestDto {
    @ApiProperty({ description: 'Employee ID' })
    empId: string;
    @ApiProperty({ description: 'Request maker for OT' })
    accountId: string;
    @ApiProperty({ description: 'Date' })
    otDate : string
    @ApiProperty({ description: 'time in' })
    timeIn?: string
    @ApiProperty({ description: 'time out' })
    timeOut?: string
    @ApiProperty({ description: 'Status for OT request' })
    status: string
    @ApiProperty({ description: 'Total hours Overtime'})
    totalHours: string
    @ApiProperty({ description: 'Batch ID'})
    batch_id: string
}
