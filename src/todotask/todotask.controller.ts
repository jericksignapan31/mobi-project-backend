import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { TodotaskService } from './todotask.service';
import { CreateTodotaskDto } from './dto/create-todotask.dto';
import { UpdateTodotaskDto } from './dto/update-todotask.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@Controller('todotask')
@ApiTags('Todotask Module')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class TodotaskController {
  constructor(private readonly todotaskService: TodotaskService) {}

  @Post()
  create(@Body() createTodotaskDto: CreateTodotaskDto) {
    return this.todotaskService.create(createTodotaskDto);
  }

  @Get()
  findAll() {
    return this.todotaskService.todoTask({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todotaskService.findOne(+id);
  }
  @Put('done/:id')
  async done(@Param('id') id: string) {
    return this.todotaskService.update(+id, {title: '', done: true});
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodotaskDto: UpdateTodotaskDto) {
    return this.todotaskService.update(+id, updateTodotaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todotaskService.remove(+id);
  }
}
