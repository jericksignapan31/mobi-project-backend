import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  BadRequestException,
  Put,
} from '@nestjs/common';
import { LeavetypeService } from './leavetype.service';
import { CreateLeavetypeDto } from './models/create-leavetype.dto';
import { UpdateLeavetypeDto } from './models/update-leavetype.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('leavetype')
@ApiBearerAuth()
@ApiTags('Leave Type Module')
export class LeavetypeController {
  constructor(private readonly leavetypeService: LeavetypeService) {}

  @Post()
  async create(@Body() createLeavetypeDto: CreateLeavetypeDto) {
    const leavetypeExist = await this.leavetypeService.leaveTypes({
      where: { leave_type_name: createLeavetypeDto.leave_type_name },
    });
    if (leavetypeExist.length > 0)
      throw new BadRequestException({
        message: 'Leave type already exist',
        statusCode: 400,
      });
    return this.leavetypeService.create(createLeavetypeDto);
  }

  @Put('archive/:id')
  async archive(@Param('id') id: string) {
    return this.leavetypeService.archive(+id);
  }
  @Get()
  async findAll() {
    return this.leavetypeService.leaveTypes({});
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leavetypeService.leaveType({leave_type_id: +id});
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLeavetypeDto: UpdateLeavetypeDto,
  ) {
    return this.leavetypeService.update(+id, updateLeavetypeDto);
  }
}
