import { Injectable } from '@nestjs/common';
import { CreateTodotaskDto } from './dto/create-todotask.dto';
import { UpdateTodotaskDto } from './dto/update-todotask.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class TodotaskService {
  constructor (private prisma : PrismaService) {}

  async todoTask(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.todoWhereUniqueInput;
    where?: Prisma.todoWhereInput;
    orderBy?: Prisma.todoOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.todo.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: CreateTodotaskDto) {
    return this.prisma.todo.create({
      data: {
        title: data.title,
      },
    });
  }

  findAll() {
    return `This action returns all todotask`;
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({where: {id: id}});
  }

  update(id: number, updateTodotaskDto: UpdateTodotaskDto) {
    return this.prisma.todo.update({
      data: {
        ...updateTodotaskDto,
        updatedAt: new Date()
      },
      where: {
        id: id,
      }
    });
  }

  remove(id: number) {
    return this.prisma.todo.delete({where: {id: id}});
  }
}
