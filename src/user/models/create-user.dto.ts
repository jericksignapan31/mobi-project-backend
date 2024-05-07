import { ApiProperty } from '@nestjs/swagger';
import { CreateEmployeeDto } from 'src/employee/models/create-employee.dto';

export class CreateUserDto extends CreateEmployeeDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  empId: string;
  @ApiProperty()
  civil_status: string;
  @ApiProperty()
  department_id: number;
  @ApiProperty()
  position_id: number;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  middle_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  contact_number: string;
  @ApiProperty()
  birthdate: Date;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  userType: string;
  @ApiProperty()
  email: string;
  employeedetails: {};
  @ApiProperty()
  remarks: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  basic_pay: string;
  archived: boolean;
}
