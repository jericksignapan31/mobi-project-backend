import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './models/create-education.dto';
import { UpdateEducationDto } from './models/update-education.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Injectable()
export class EducationService {
  constructor(private prisma : PrismaService) {}
  async getEmployeeEducation( educationUniqueInput: Prisma.educationWhereUniqueInput) {
    return this.prisma.education.findMany({
      where: educationUniqueInput,
    })
  }
  create(createEducationDto: CreateEducationDto) {
    return this.prisma.education.create({
      data: {
        school_name: createEducationDto.school_name,
        level: createEducationDto.level,
        degree: createEducationDto.degree,
        year_graduated: createEducationDto.year_graduated,
        date_updated: createEducationDto.date_updated,
        unit_earned: createEducationDto.unit_earned,
        honor_recieved: createEducationDto.honor_recieved,
        employee: {
          connect: {
            empId: createEducationDto.emp_id
          }
        }
      }
    })
  }

  async employeeEducation(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.educationWhereUniqueInput;
    where?: Prisma.educationWhereInput;
    orderBy?: Prisma.educationOrderByWithRelationInput;
  }){
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.education.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        employee: true
      }
    })
  }
  findOne(id: number) {
    return `This action returns a #${id} education`;
  }

  update(id: number, updateEducationDto: UpdateEducationDto) {
    return `This action updates a #${id} education`;
  }

  remove(id: number) {
    return `This action removes a #${id} education`;
  }
}
