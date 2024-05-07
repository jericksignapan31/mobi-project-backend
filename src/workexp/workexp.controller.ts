import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, UseGuards } from '@nestjs/common';
import { WorkexpService } from './workexp.service';
import { CreateWorkexpDto } from './dto/create-workexp.dto';
import { UpdateWorkexpDto } from './dto/update-workexp.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@Controller('workexp')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@ApiTags('Work Experience Module')
export class WorkexpController {
  constructor(private readonly workexpService: WorkexpService) {}

  @Post()
  async create(@Body() createWorkexpDto: CreateWorkexpDto) {
    const ifworkExpExist = await this.workexpService.workexperiences({
      where: {
        company_name: createWorkexpDto.company_name,
        position: createWorkexpDto.position,
      }

    })
    if(ifworkExpExist.length > 0){
      throw new BadRequestException({
        message: 'Work Experience already exists',
      })
    }
    return this.workexpService.createworkexperience(createWorkexpDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.workexpService.deleteWorkExp(+id);
  }
}
