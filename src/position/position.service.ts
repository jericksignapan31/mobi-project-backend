import { Injectable } from '@nestjs/common';
import { CreatePositionDto } from './models/create-position.dto';
import { UpdatePositionDto } from './models/update-position.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Injectable()
export class PositionService {
  constructor(private prisma: PrismaService) {}
  async position(positionWhereUniqueInput: Prisma.positionWhereUniqueInput) {
    return this.prisma.position.findUnique({
      where: positionWhereUniqueInput,
    });
  }
  async positions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.positionWhereUniqueInput;
    where?: Prisma.positionWhereInput;
    orderBy?: Prisma.positionOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.position.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async create(data: CreatePositionDto) {
    return this.prisma.position.create({
      data,
    });
  }
}
