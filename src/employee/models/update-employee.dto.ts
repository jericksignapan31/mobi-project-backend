import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
    @ApiProperty()
    empId : string;
    @ApiProperty()
    department_id : number;
    @ApiProperty()
    position_id : number;
    @ApiProperty()
    first_name : string;
    @ApiProperty()
    middle_name : string;
    @ApiProperty()
    last_name : string;
    @ApiProperty()
    contact_number : string;
    @ApiProperty()
    birthdate : Date;
    @ApiProperty()
    username : string;
    @ApiProperty()
    password : string;
    @ApiProperty()
    userType : string;
    @ApiProperty()
    email : string;
    @ApiProperty()
    gender : string;
    @ApiProperty()
    basic_pay: string;
    @ApiProperty()
    address: string
    @ApiProperty()
    archived: boolean;
    @ApiProperty()
    profile_picture: string;
    @ApiProperty()
    civi_status: string;
    @ApiProperty()
    date_hired: Date;
    @ApiProperty()
    date_resigned: Date;
}
