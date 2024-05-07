import { Module } from '@nestjs/common';
import { TodotaskService } from './todotask.service';
import { TodotaskController } from './todotask.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [TodotaskController],
  providers: [TodotaskService, PrismaService, JwtService],
})
export class TodotaskModule {}
