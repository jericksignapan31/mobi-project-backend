import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put, BadRequestException } from '@nestjs/common';
import { LeaverequestService } from './leaverequest.service';
import { CreateLeaverequestDto } from './dto/create-leaverequest.dto';
import { UpdateLeaverequestDto } from './dto/update-leaverequest.dto';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('leaverequest')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiTags('Leave Request Module')
export class LeaverequestController {
  constructor(private readonly leaverequestService: LeaverequestService) {}

  @Post()
  create(@Body() createLeaverequestDto: CreateLeaverequestDto) {
    return this.leaverequestService.create(createLeaverequestDto);
  }
  
  @Put('update/:id')
  async updateLeaverequest(@Param('id') id: string, @Body() updateLeaverequestDto: UpdateLeaverequestDto) {
    let totalSum 
    const isEligibleForPay : any = await this.leaverequestService.totalSumofDates(updateLeaverequestDto.emp_id);
    const totalLeaves = isEligibleForPay[0].total_sum
    if(totalLeaves < 0) {
        throw new BadRequestException('No Leave Request Found');
    } else {
        totalSum = isEligibleForPay[0].total_sum;
    }

    const finalSum = +totalSum + +updateLeaverequestDto.sum_leavedate;
    if (finalSum > 5) {
        if (updateLeaverequestDto.with_pay === true) {
            throw new BadRequestException('Employee is not eligible for pay');
        }
    } 
    const update = await this.leaverequestService.update({ id: +id, data: updateLeaverequestDto });
    return update;
    
}

  @Get()
  findAll() {
    return this.leaverequestService.leaverequests({});
  }

  @Get('view/leaverequest/:id')
  findOne(@Param('id') id: string) {
    return this.leaverequestService.leaverequest({leave_request_id: +id});
  }
  @Get('employee/:id')
  findEmployeeLeaverequests(@Param('id') id: string) {
    return this.leaverequestService.leaverequests({where: {emp_id: id}});
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaverequestService.remove(+id);
  }
}
