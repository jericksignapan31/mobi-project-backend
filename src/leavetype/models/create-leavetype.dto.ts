import { ApiProperty } from "@nestjs/swagger";

export class CreateLeavetypeDto {
    leave_type_id: number
    @ApiProperty()
    leave_type_name: string
    @ApiProperty()
    description?: string | null
    date_created?: Date | string
    date_updated?: Date | string | null
    archived?: boolean
}
