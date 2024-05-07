import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './models/create-education.dto';
import { UpdateEducationDto } from './models/update-education.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@Controller('education')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Education Module')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  async create(@Body() createEducationDto: CreateEducationDto) {
    const existtoEmployee = await this.educationService.employeeEducation({
      where : {
        emp_id: createEducationDto.emp_id,
        school_name: createEducationDto.school_name,
        level: createEducationDto.level,
      }
    }); 

    if (existtoEmployee.length > 0) {
      // Check if all data from parameter is on employee
        throw new BadRequestException({
          message: 'Education data is exist in Employee',
          statusCode: 400
        });
      
    }
    return this.educationService.create(createEducationDto);
  }
}
