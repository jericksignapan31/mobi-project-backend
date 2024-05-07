import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { EmployeeService } from 'src/employee/employee.service';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService, EmployeeService, PrismaService],
})
export class DashboardModule {}
