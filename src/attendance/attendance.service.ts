import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AttendanceService {
  constructor(private prisma : PrismaService){}

  async batchImport(data: Prisma.attendancelogCreateManyInput[]){
    try {
        data.map((d) => {
            return this.prisma.attendancelog.create({
            data: {
              attendanceDate: new Date(d.attendanceDate).toDateString(),
              timeIn1: d.timeIn1,
              timeIn2: d.timeIn2,
              timeOut1: d.timeOut1,
              timeOut2: d.timeOut2,
              totalHours: d.totalHours,
              employee: {
              connect: {
                empId: d.employeeId,
              },
              },
            },
            });
        })
      
      return { message: 'Batch created successfully' };
    } catch (error) {
      throw new BadRequestException(`Failed to create batch: ${error.message}`);
    }
  }
  

  async batch(data: Prisma.attendancelogCreateManyInput[]) {
    await this.prisma.$transaction(data.map((d) => {
      return this.prisma.attendancelog.create({
        data: {
          attendanceDate: new Date(d.attendanceDate).toISOString(),
          timeIn1: d.timeIn1,
          timeIn2: d.timeIn2,
          timeOut1: d.timeOut1,
          timeOut2: d.timeOut2,
          totalHours: d.totalHours,
          employee: {
            connect: {
              empId: d.employeeId,
            }
          }
        }
      });
    }))
  }
  async create(data: Prisma.attendancelogCreateManyInput) {
    return this.prisma.attendancelog.create({
      data: {
        attendanceDate: new Date(data.attendanceDate).toISOString(),
        timeIn1: data.timeIn1,
        timeIn2: data.timeIn2,
        timeOut1: data.timeOut1,
        timeOut2: data.timeOut2,
        totalHours: data.totalHours,
        employee: {
          connect: {
            empId: data.employeeId,
          }
        }
      }
    });
  }

  async attendance(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.attendancelogWhereUniqueInput;
    where?: Prisma.attendancelogWhereInput;
    orderBy?: Prisma.attendancelogOrderByWithRelationInput;
  }) : Promise<any>{
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.attendancelog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        employee: true
      }
    });
  }

  async update(id: string, data: UpdateAttendanceDto) {
    return this.prisma.attendancelog.update({
      where: { id },
      data: {
        attendanceDate: new Date(data.attendanceDate).toISOString(),
        timeIn1: data.timeIn1,
        timeIn2: data.timeIn2,
        timeOut1: data.timeOut1,
        timeOut2: data.timeOut2,
        totalHours: data.totalHours,
      }
    });
  }
  
  async createAttendanceEntries(data) {
    try {
      const createdEntries = [];
      for (const entry of data) {
        const createdEntry = await this.prisma.attendancelog.create({
          data: entry,
        });
        createdEntries.push(createdEntry);
      }
      return createdEntries;
    } catch (error) {
      console.error('Error creating attendance entries:', error.message);
      throw error;
    }
  }
}
