import { Controller, Get, Put,Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { EmpTrainingService } from './emp-training.service';
import { CreateEmpTrainingDto } from './models/create-emp-training.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@Controller('emp-training')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Employee Training Module')
export class EmpTrainingController {
  constructor(private readonly empTrainingService: EmpTrainingService) {}
  @Post()
  async create(@Body() createEmpTrainingDto: CreateEmpTrainingDto) {
    const existingEmployeeTraining = await this.empTrainingService.employeeTrainings({
      where: {
          emp_id: createEmpTrainingDto.emp_id,
          title: createEmpTrainingDto.title // Check if title exists for the employee
      }
  });

  if (existingEmployeeTraining.length > 0) {
      throw new BadRequestException({
        message: "Training already exists for the employee with the same title",
        statusCode: 400,
      })
  } else {
      // Training does not exist for the employee with the same title
      // Proceed with creating the new employee training
      return this.empTrainingService.create(createEmpTrainingDto);
  }
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateEmpTrainingDto: CreateEmpTrainingDto) {
    return this.empTrainingService.update(+id, updateEmpTrainingDto);
  }

}
