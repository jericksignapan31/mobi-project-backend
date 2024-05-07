import { Injectable } from '@nestjs/common';
import { CreateLeaverequestDto } from './dto/create-leaverequest.dto';
import { UpdateLeaverequestDto } from './dto/update-leaverequest.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LeaverequestService {
  constructor(private prisma : PrismaService) {}
  async leaverequest(whereUniqueInput: Prisma.leave_requestWhereUniqueInput){
    return this.prisma.leave_request.findUnique({
      where: whereUniqueInput,
      include: {
        leave_type: true,
      }
    })
  }
  async leaverequests(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.leave_requestWhereUniqueInput;
    where?: Prisma.leave_requestWhereInput;
    orderBy?: Prisma.leave_requestOrderByWithRelationInput;
  }){
    return this.prisma.leave_request.findMany({
      skip: params.skip,
      take: params.take,
      cursor: params.cursor,
      where: params.where,
      orderBy: params.orderBy,
      include: {
        leave_type: true,
      }
    })
  }
  async create(data: CreateLeaverequestDto){
    return this.prisma.leave_request.create({
      data : {
        date_start : data.date_start,
        date_end : data.date_end,
        reason : data.reason,
        status : data.status,
        sum_leavedate: data.sum_leavedate,
        support_file: data.support_file,
        employee:{
          connect: { empId: data.emp_id}
        },
        leave_type: {
          connect: { leave_type_id: data.leave_type_id}
        }
        
      }
    })
  }
  
  async totalSumofDates(emp_id: string) {
    const result : any =  this.prisma.$queryRaw`
      SELECT 
    years.year AS year, 
    COALESCE(SUM(lr.sum_leavedate)::numeric, 0) AS total_sum
FROM 
    (SELECT generate_series(EXTRACT(YEAR FROM CURRENT_DATE) - 1, EXTRACT(YEAR FROM CURRENT_DATE)) AS year) years
LEFT JOIN 
    leave_request lr ON EXTRACT(YEAR FROM lr.date_start) = years.year AND lr.emp_id = ${emp_id} AND lr.with_pay = true
GROUP BY 
    years.year;
    `;
    console.log(result);
    if(result.length === 0) {
      return 0;
    }
    return result;
  }
  
  
  
  

  findOne(id: number) {
    return `This action returns a #${id} leaverequest`;
  }

  update(params: {id: number, data: UpdateLeaverequestDto}){
    return this.prisma.leave_request.update({
      where: {leave_request_id: params.id},
      data: {
        date_start: params.data.date_start,
        date_end: params.data.date_end,
        reason: params.data.reason,
        status: params.data.status,
        with_pay: Boolean(params.data.with_pay),
        sum_leavedate: params.data.sum_leavedate,
        support_file: params.data.support_file,
        date_updated: new Date(),
        employee:{
          connect: { empId: params.data.emp_id}
        },
        leave_type: {
          connect: { leave_type_id: params.data.leave_type_id}
        }
      }
    })
  }

  remove(id: number) {
    return `This action removes a #${id} leaverequest`;
  }
}
