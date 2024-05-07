import { Module } from '@nestjs/common';
import { LeavetypeService } from './leavetype.service';
import { LeavetypeController } from './leavetype.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LeavetypeController],
  providers: [LeavetypeService, PrismaService, JwtService],
})
export class LeavetypeModule {}
