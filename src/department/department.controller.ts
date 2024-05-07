import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './model/create-department.dto';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('department')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Department Module')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    const department = await this.departmentService.departments({
      where: { name: createDepartmentDto.name },
    });
    if (department.length > 0) {
      throw new BadRequestException({
        message: 'Department already exists',
        statusCode: 400,
      });
    }
    return await this.departmentService.create(createDepartmentDto);
  }

  @Put('archive/:id')
  archive(@Param('id') id: string) {
    return this.departmentService.archive({
      id: Number(id),
    });
  }
  @Put('unarchive/:id')
  unarchive(@Param('id') id: string) {
    return this.departmentService.unarchive({
      id: Number(id),
    });
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateDepartmentDto: CreateDepartmentDto,
  ) {
    return this.departmentService.update({
      where: {
        id: id,
      },
      data: updateDepartmentDto,
    });
  }

  @Get('all')
  findAll() {
    return this.departmentService.departments({});
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.departmentService.department({
      id: Number(id),
    });
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.hardRemove(+id);
  }
}
