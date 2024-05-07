import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('dashboard')
@ApiTags('Dashboard Module')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}
  @Get('emloyee/all/count')
  async countAllEmployee() {
    return this.dashboardService.countAllEmployee();
  }

  @Get('leave-request/pending/count')
  async countPendingLeaveRequest() {
    return this.dashboardService.countPendingLeaveRequest();
  }

  @Get('position/all/count')
  async countAllPosition() {
    return this.dashboardService.countAllPosition();
  }
}
