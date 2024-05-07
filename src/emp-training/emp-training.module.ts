import { Module } from '@nestjs/common';
import { EmpTrainingService } from './emp-training.service';
import { EmpTrainingController } from './emp-training.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [EmpTrainingController],
  providers: [EmpTrainingService, PrismaService, JwtService],
})
export class EmpTrainingModule {}
