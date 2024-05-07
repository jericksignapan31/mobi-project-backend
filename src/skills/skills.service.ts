import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma, employeedetails } from '@prisma/client';

@Injectable()
export class SkillsService {
  constructor(private prisma: PrismaService) {}
  async employeeskills(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.skillsWhereUniqueInput;
    where?: Prisma.skillsWhereInput;
    orderBy?: Prisma.skillsOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.skills.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  async employeeSkill(where: Prisma.skillsWhereUniqueInput) {
    return this.prisma.skills.findUnique({
      where,
    });
  }
  async create(data: CreateSkillDto) {
    return this.prisma.skills.create({
      data: {
        skill_name: data.skill_name,
        employee: {
          connect: {
            empId: data.emp_id,
          },
        },
      },
    });
  }

  update(id: number, updateSkillDto: Prisma.skillsUpdateInput) {
    return this.prisma.skills.update({
      where: { skill_id: id },
      data: {
        skill_name: updateSkillDto.skill_name,
      },
    });
  }

  remove(id: number) {
    this.prisma.skills.delete({ where: { skill_id: id } });
  }
}
