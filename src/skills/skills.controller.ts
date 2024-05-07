import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
  Put,
} from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('skills')
@ApiTags('Skills Module')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  async create(@Body() data: CreateSkillDto) {
    const isExist = await this.skillsService.employeeskills({
      where: {
        emp_id: data.emp_id,
        skill_name: data.skill_name,
      },
    });
    if (isExist.length > 0) {
      throw new BadRequestException({
        message: 'Skill already exists',
      });
    }
    return this.skillsService.create(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.skillsService.employeeskills({where: {emp_id: id}});
  }
  @Put(':id')
  async update(id: string, updateSkillDto: UpdateSkillDto) {
    return this.skillsService.update(+id, updateSkillDto);
  }
  async delete(id: string) {
    return this.skillsService.remove(+id);
  }
}
