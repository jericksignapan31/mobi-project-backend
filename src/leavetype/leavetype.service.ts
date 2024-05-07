import { Injectable } from '@nestjs/common';
import { CreateLeavetypeDto } from './models/create-leavetype.dto';
import { UpdateLeavetypeDto } from './models/update-leavetype.dto';
import { Prisma, leave_request_type } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma/prisma.service';

@Injectable()
export class LeavetypeService {
  constructor(private prisma : PrismaService){}
  async leaveType(
    LeaveTypeWhereUniqueInput: Prisma.leave_request_typeWhereUniqueInput,
  ) {
    return this.prisma.leave_request_type.findUnique({
      where: LeaveTypeWhereUniqueInput,
    });
  }

  async leaveTypes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.leave_request_typeWhereUniqueInput;
    where?: Prisma.leave_request_typeWhereInput;
    orderBy?: Prisma.leave_request_typeOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.leave_request_type.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  create(createLeavetypeDto: Prisma.leave_request_typeCreateInput) {
    return this.prisma.leave_request_type.create({
      data: {
        ...createLeavetypeDto
      }
    })
  }

  archive(id: number){
    return this.prisma.leave_request_type.update({
      where: {leave_type_id: id},
      data: {
        archived: true
      }
    })
  }

  unarchive(id: number){
    return this.prisma.leave_request_type.update({
      where: {leave_type_id: id},
      data: {
        archived: false
      }
    })
  }

  update(id: number, updateLeavetypeDto: Prisma.leave_request_typeUpdateInput) {
    return this.prisma.leave_request_type.update({
      where: {leave_type_id: id},
      data: {
        ...updateLeavetypeDto
      }
    })
  }
  
  hardRemove(id: number) {
    return this.prisma.leave_request_type.delete({
      where: {
        leave_type_id: id
      }
    });
  }
}
