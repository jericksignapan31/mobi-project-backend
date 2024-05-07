import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService, PrismaService, JwtService],
})
export class AttendanceModule {}
