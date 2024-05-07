import { Controller, Get, Post, Body, Patch,Put, Param, Delete, UseGuards } from '@nestjs/common';
import { OtrequestService } from './otrequest.service';
import { CreateOtrequestDto } from './dto/create-otrequest.dto';
import { UpdateOtrequestDto } from './dto/update-otrequest.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('otrequest')
@ApiTags('OT Request')
export class OtrequestController {
  constructor(private readonly otrequestService: OtrequestService) {}

  @Post()
  create(@Body() createOtrequestDto: CreateOtrequestDto[]) {
    return this.otrequestService.createOTRequests(createOtrequestDto);
  }

  @Get()
  findAll() {
    return this.otrequestService.otRequests({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.otrequestService.otRequests({
      where: {
        id: id
      } 
    });
  }

  @Get('employee/:id')
  async getOtrequestPerEmployee(@Param() id: string) {
    return this.otrequestService.otRequests({
      where: {
        empId: id
      }
    })
  }

  @Get('supervisor/:id')
  async getOtRequestPerSupervisorPending(@Param() id: string) {
    return this.otrequestService.otRequests({
      where: {
        accountId: id,
      }
    })
  }

  @Get('supervisor/:id/approved')
  async getOtRequestPerSupervisorApproved(@Param() id: string) {
    return this.otrequestService.otRequests({
      where: {
        accountId: id,
        status: 'approved'
      }
    })
  }

  @Get('batch/count/:id')
  async getBatchCount(@Param() id: string) {
    return this.otrequestService.otRequests({
      where: {
        batch_id: id
      }
    })
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateOtrequestDto: UpdateOtrequestDto) {
    return this.otrequestService.update(id, updateOtrequestDto);
  }
  @Put('batch-approved/:id')
  async batchApproved(@Param('id') id: string) {
    return this.otrequestService.updateBatch(id);
  }
}
