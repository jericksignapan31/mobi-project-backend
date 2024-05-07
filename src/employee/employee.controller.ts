import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UseGuards,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto } from './models/create-employee.dto';
import { UpdateEmployeeDto } from './models/update-employee.dto';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('employee')
@ApiTags('Employee Module')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.employeeService.employee({ user_id: id });
  }
  @Get()
  async findAll() {
    return this.employeeService.employees({});
  }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    if(updateEmployeeDto.position_id == 0) throw new BadRequestException('Position ID is required')
    if(updateEmployeeDto.department_id == 0) throw new BadRequestException('Position ID is required')
    return this.employeeService.update({data: updateEmployeeDto, where: { empId: id}});
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove({ empId: id });
  }
  
}
