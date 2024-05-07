import { Injectable } from '@nestjs/common';
import { CreateWorkexpDto } from './dto/create-workexp.dto';
import { UpdateWorkexpDto } from './dto/update-workexp.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class WorkexpService {
  constructor(private prisma: PrismaService) {}
  async workexperiences(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.work_experienceWhereUniqueInput;
    where?: Prisma.work_experienceWhereInput;
    orderBy?: Prisma.work_experienceOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.work_experience.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createworkexperience(data : CreateWorkexpDto) {
    return this.prisma.work_experience.create({ data: {
      company_name: data.company_name,
      position: data.position,
      date_started: data.date_started,
      date_ended: data.date_ended,
      monthly_salary: data.monthly_salary,
      goverment_service: data.goverment_service,
      status_appointment: data.status_appointment,
      file_link: data.file_link,
      employee: {
        connect: {
          empId: data.emp_id,
        },
      },
    } });
  }

  async updateWorkExp(id: number, data: UpdateWorkexpDto) {
    return this.prisma.work_experience.update({
      where: { work_experience_id: data.work_experience_id },
      data: {
        company_name: data.company_name,
        position: data.position,
        date_started: data.date_started,
        date_ended: data.date_ended,
        monthly_salary: data.monthly_salary,
        goverment_service: data.goverment_service,
        status_appointment: data.status_appointment,
      },
    });
  }

  async deleteWorkExp(id: number) {
    return this.prisma.work_experience.delete({
      where: { work_experience_id: id },
    });
  }
}
