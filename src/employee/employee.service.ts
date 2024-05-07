import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { Prisma, employeedetails } from '@prisma/client';
import { UpdateEmployeeDto } from './models/update-employee.dto';
import { CreateEmployeeDto } from './models/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma : PrismaService) {}
  async employee(
    employeeWhereUniqueInput: Prisma.employeedetailsWhereUniqueInput,
  ): Promise<employeedetails | null> {
    return this.prisma.employeedetails.findUnique({
      where: employeeWhereUniqueInput,
      include: {
        user: true,
        department: true,
        positionFK: true,
        education: true,
        skills: true,
        training: true,
        document: true,
        work_experience: true,
      }
    });
  }
  async employees(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.employeedetailsWhereUniqueInput;
    where?: Prisma.employeedetailsWhereInput;
    orderBy?: Prisma.employeedetailsOrderByWithRelationInput;

  }): Promise<employeedetails[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.employeedetails.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        user: true,
        department: true,
        positionFK: true,
        education: true,
        skills: true,
        training: true,
        certificate: true,
        document: true,
        leave_request: true,
        work_experience: true,
      }
    }
    );
  }
  async archive(where: Prisma.employeedetailsWhereUniqueInput): Promise<employeedetails> {
    return this.prisma.employeedetails.update({
      where,
      data: { archived: true },
    });
  }
  async unarchive(
    where: Prisma.employeedetailsWhereUniqueInput,
  ): Promise<employeedetails> {
    return this.prisma.employeedetails.update({
      where,
      data: { archived: false },
    });
  }
  async update(params: {
    where: Prisma.employeedetailsWhereUniqueInput;
    data: UpdateEmployeeDto;
  }): Promise<employeedetails> {
    const { where, data } = params;
    return this.prisma.employeedetails.update({
      data: {
        empId: data.empId,
        department: {
          connect: { id: data.department_id },
        },
        positionFK:{
          connect: { position_id: data.position_id },
        },
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        contact_number: data.contact_number,
        birthdate: data.birthdate,
        gender: data.gender,
        archived: Boolean(data.archived),
        basic_pay: data.basic_pay,
        address: data.address,
        date_hired: data.date_hired,
        date_resigned: data.date_resigned,
        profile_picture: data.profile_picture,
      },
      where,
    });
  }

  async remove(where: Prisma.employeedetailsWhereUniqueInput): Promise<employeedetails> {
    return this.prisma.employeedetails.delete({
      where
    });
  }

  
}
