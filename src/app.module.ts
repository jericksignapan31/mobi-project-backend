import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { EmployeeModule } from './employee/employee.module';
import { UserModule } from './user/user.module';
import { PositionModule } from './position/position.module';
import { AuthModule } from './core/services/auth/auth.module';
import { LeavetypeModule } from './leavetype/leavetype.module';
import { EducationModule } from './education/education.module';
import { SkillsModule } from './skills/skills.module';
import { EmpTrainingModule } from './emp-training/emp-training.module';
import { LeaverequestModule } from './leaverequest/leaverequest.module';
import { DocuModule } from './docu/docu.module';
import { WorkexpModule } from './workexp/workexp.module';
import { AttendanceModule } from './attendance/attendance.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TodotaskModule } from './todotask/todotask.module';
import { OtrequestModule } from './otrequest/otrequest.module';

@Module({
  imports: [
    DepartmentModule,
    EmployeeModule,
    UserModule,
    PositionModule,
    AuthModule,
    LeavetypeModule,
    EducationModule,
    SkillsModule,
    EmpTrainingModule,
    LeaverequestModule,
    DocuModule,
    WorkexpModule,
    AttendanceModule,
    DashboardModule,
    TodotaskModule,
    OtrequestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
