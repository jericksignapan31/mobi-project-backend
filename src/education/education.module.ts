import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Module({
  controllers: [EducationController],
  providers: [EducationService, JwtService, PrismaService],
})
export class EducationModule {}
