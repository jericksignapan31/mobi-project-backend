import { ApiProperty } from "@nestjs/swagger";

export class CreateSkillDto {
    @ApiProperty()
    skill_name: string;
    @ApiProperty()
    emp_id: string;
    employee : {}
}
