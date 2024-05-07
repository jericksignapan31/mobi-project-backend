import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma, department } from '@prisma/client';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}
  async department(
    departmentWhereUniqueInput: Prisma.departmentWhereUniqueInput,
  ): Promise<department | null> {
    return this.prisma.department.findUnique({
      where: departmentWhereUniqueInput,
    });
  }
  async departments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.departmentWhereUniqueInput;
    where?: Prisma.departmentWhereInput;
    orderBy?: Prisma.departmentOrderByWithRelationInput;
  }): Promise<department[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.department.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.departmentCreateInput): Promise<department> {
    return this.prisma.department.create({
      data,
    });
  }

  async archive(where: Prisma.departmentWhereUniqueInput): Promise<department> {
    return this.prisma.department.update({
      where,
      data: { archived: true },
    });
  }

  async unarchive(
    where: Prisma.departmentWhereUniqueInput,
  ): Promise<department> {
    return this.prisma.department.update({
      where,
      data: { archived: false },
    });
  }

  async update(params: {
    where: Prisma.departmentWhereUniqueInput;
    data: Prisma.departmentUpdateInput;
  }): Promise<department> {
    const { where, data } = params;
    return this.prisma.department.update({
      data,
      where,
    });
  }

  hardRemove(id: number) {
    this.prisma.department.delete({
      where: { id: id },
    });
  }
}
