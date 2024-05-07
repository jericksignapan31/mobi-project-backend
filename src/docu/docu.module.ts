import { Module } from '@nestjs/common';
import { DocuService } from './docu.service';
import { DocuController } from './docu.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DocuController],
  providers: [DocuService, PrismaService, JwtService],
})
export class DocuModule {}
