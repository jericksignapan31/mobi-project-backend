import { Module } from '@nestjs/common';
import { OtrequestService } from './otrequest.service';
import { OtrequestController } from './otrequest.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [OtrequestController],
  providers: [OtrequestService, PrismaService, JwtService],
})
export class OtrequestModule {}
