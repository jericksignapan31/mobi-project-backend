import { Injectable } from '@nestjs/common';
import { CreateEmpTrainingDto } from './models/create-emp-training.dto';
import { UpdateEmpTrainingDto } from './models/update-emp-training.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmpTrainingService {
  constructor(private prisma : PrismaService) {}
  async getEmployeeTraining( trainingUniqueInput: Prisma.trainingWhereUniqueInput) {
    return this.prisma.training.findMany({
      where: trainingUniqueInput,
    })
  }
  async employeeTrainings(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.trainingWhereUniqueInput;
    where?: Prisma.trainingWhereInput;
    orderBy?: Prisma.trainingOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.training.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  create(createEmpTrainingDto: CreateEmpTrainingDto) {
    return this.prisma.training.create({
      data: {
        title : createEmpTrainingDto.title,
        date_start : createEmpTrainingDto.date_start,
        date_end : createEmpTrainingDto.date_end,
        no_of_hours : createEmpTrainingDto.no_of_hours,
        type_of_ld : createEmpTrainingDto.type_of_ld,
        conducted_by : createEmpTrainingDto.conducted_by,
        document_link: createEmpTrainingDto.document_link,
        employee: {
          connect: {
            empId: createEmpTrainingDto.emp_id
          }
        }
      }
    })
  }
  update(id: number, UpdateEmpTrainingDto: CreateEmpTrainingDto){
    return this.prisma.training.update({
      where: { title_id: id },
      data: {
        ...UpdateEmpTrainingDto
      }
    })
  }
  
}
