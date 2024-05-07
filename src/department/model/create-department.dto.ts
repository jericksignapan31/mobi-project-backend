import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;

  emp_id: string;
  employee: {}
}
