import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class DashboardService {
  constructor(
    private employee: EmployeeService,
    private prisma: PrismaService,
  ) {}
  async countAllEmployee() {
    return this.prisma.employeedetails.count({
      where: {
        empId: {
          not: '',
        },
        archived: {
          not: true,
        },
      },
    });
  }

  async countAllDepartment() {
    return this.prisma.employeedetails.count({
      where: {
        department_id: {
          not: 0,
        },
        archived: {
          not: true,
        },
      },
      select: {
        department_id: true,
      },
    });
  }
  async countAllPosition() {
    const positions = await this.prisma.employeedetails.groupBy({
      by: ['position_id'],
      _count: true,
    });
    return positions;
  }
  async countPendingLeaveRequest() {
    return this.prisma.leave_request.count({
      where: {
        status: 'pending' || 'Pending',
      }
    })
  }
}
