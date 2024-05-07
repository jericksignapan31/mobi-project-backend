import { ApiProperty } from '@nestjs/swagger';

export class CreateEducationDto {
  @ApiProperty()
  school_name: string;
  @ApiProperty()
  level: string;
  @ApiProperty()
  degree: string;
  @ApiProperty()
  year_graduated: string;
  date_updated: Date;
  @ApiProperty()
  unit_earned: string;
  @ApiProperty()
  honor_recieved: string;
  @ApiProperty()
  emp_id: string;
}
