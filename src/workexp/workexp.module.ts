import { Module } from '@nestjs/common';
import { WorkexpService } from './workexp.service';
import { WorkexpController } from './workexp.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [WorkexpController],
  providers: [WorkexpService, PrismaService, JwtService],
})
export class WorkexpModule {}
