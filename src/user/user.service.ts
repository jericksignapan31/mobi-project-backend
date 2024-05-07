import { Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { CreateUserDto } from './models/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async user(userWhereUniqueInput: Prisma.userWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        employee: true,
      },
    });
  }
  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.userWhereUniqueInput;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        employee: true,
      },
    });
  }
  async create(user: CreateUserDto): Promise<user> {
    return this.prisma.user.create({
      data: {
        username: user.username,
        password: user.password,
        userType: user.userType,
        employee: {
          create: {
            empId: user.empId,
            civil_status: user.civil_status,
            department: {
              connect: {
                id: user.department_id,
              },
            },
            first_name: user.first_name,
            middle_name: user.middle_name,
            last_name: user.last_name,
            email: user.email,
            gender: user.gender,
            contact_number: user.contact_number,
            birthdate: user.birthdate,
            remarks: user.remarks,
            address: user.address,
            basic_pay: user.basic_pay,
            positionFK: {
              connect: {
                position_id: user.position_id,
              },
            },
          },
        },
      },
    });
  }
  async update (params: {
    where: Prisma.userWhereUniqueInput;
    data: Prisma.userUpdateInput;
  }): Promise<user> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  
}
