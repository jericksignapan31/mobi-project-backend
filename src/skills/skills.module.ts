import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Module({
  controllers: [SkillsController],
  providers: [SkillsService, JwtService, PrismaService],
})
export class SkillsModule {}
