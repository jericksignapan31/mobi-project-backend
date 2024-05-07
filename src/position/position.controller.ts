import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PositionService } from './position.service';
import { CreatePositionDto } from './models/create-position.dto';
import { UpdatePositionDto } from './models/update-position.dto';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('position')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Position Module')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Post()
  create(@Body() createPositionDto: CreatePositionDto) {
    return this.positionService.create(createPositionDto);
  }
  
  @Get()
  findAll() {
    return this.positionService.positions({});
  }

}
