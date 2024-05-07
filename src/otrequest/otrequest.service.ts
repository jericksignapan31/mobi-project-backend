import { Injectable } from '@nestjs/common';
import { CreateOtrequestDto } from './dto/create-otrequest.dto';
import { UpdateOtrequestDto } from './dto/update-otrequest.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OtrequestService {
  constructor(private prisma : PrismaService){}
  async otRequests(params : {
    skip?: number;
    take?: number;
    cursor?: Prisma.otRequestTableWhereUniqueInput;
    where?: Prisma.otRequestTableWhereInput;
    orderBy?: Prisma.otRequestTableOrderByWithRelationInput;
  }): Promise<any>{
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.otRequestTable.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createOTRequests(payload: any): Promise<CreateOtrequestDto[]> {
    const { employeelist, ...otRequestData } = payload;

    const transactions = await Promise.all(
      employeelist.map(async (employee: any) => {
        const transaction = await this.prisma.$transaction(async (prisma) => {
          // Create the otRequestTable entry
          const otRequestEntry = await prisma.otRequestTable.create({
            data: {
              ...otRequestData,
              empId: employee.empId,
            },
          });

          return otRequestEntry;
        });

        return transaction;
      })
    );

    return transactions;
  }
  findAll() {
    return `This action returns all otrequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} otrequest`;
  }

  update(id: string, updateOtrequestDto: UpdateOtrequestDto) {
    return this.prisma.otRequestTable.update({
      where: {
        id: id
      },
      data: updateOtrequestDto
    })
  }

  updateBatch(id: string,){
    return this.prisma.otRequestTable.updateMany({
      where: {
        batch_id: id
      },
      data: {
        status: 'approved'
      }
    })
  }
  remove(id: number) {
    return `This action removes a #${id} otrequest`;
  }

  countbatchPending(id: string){
    return this.prisma.otRequestTable.count({
      where: {
        batch_id: id,
        status: 'pending'
      }
    })
  }
}
