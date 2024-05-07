import { Module } from '@nestjs/common';
import { LeaverequestService } from './leaverequest.service';
import { LeaverequestController } from './leaverequest.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LeaverequestController],
  providers: [LeaverequestService, PrismaService, JwtService],
})
export class LeaverequestModule {}
