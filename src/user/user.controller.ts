import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { EncryptionService } from 'src/core/services/encryption/encryption.service';
import { CreateUserDto } from './models/create-user.dto';
import { EmployeeService } from 'src/employee/employee.service';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { changePasswordDto } from './models/password.change.dto';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('user')
@ApiTags('User Module')
export class UserController {
  constructor(
    private user: UserService,
    private encrypt: EncryptionService,
    private employee: EmployeeService,
  ) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    if (user.empId == undefined || '')
      throw new BadRequestException('Employee ID is required');
    if (user.position_id == 0)
      throw new BadRequestException('Position ID is required');
    if (user.department_id == 0)
      throw new BadRequestException('Department ID is required');
    const userExist = await this.user.users({
      where: { username: user.username },
    });
    const employeeExist = await this.employee.employees({
      where: { first_name: user.first_name, last_name: user.last_name },
    });
    if (userExist.length > 0) {
      throw new BadRequestException({
        messsage: 'User already exists',
        statusCode: 400,
      });
    }
    if (employeeExist.length > 0) {
      throw new BadRequestException({
        message: 'Employee already exists',
        statusCode: 400,
      });
    }
    user.password = await this.encrypt.hashText(user.password);
    return this.user.create(user);
  }

  @Put('deactivate/:id')
  async deactivateUser(@Param('id') id: string) {
    return this.user.update({
      where: { id: id },
      data: { archived: true },
    });
  }

  @Put('profile/change-password/:id')
  async changeProfilePassword(@Param('id') id: string, @Body() body: changePasswordDto) {
    const user = await this.user.user({ id: id });
    if (!user) {
      throw new BadRequestException({
        message: 'User not found',
        statusCode: 400,
      });
    }
    const password = await this.encrypt.hashText(body.password);
    return this.user.update({
      where: { id: id },
      data: { password: password, isPasswordChanged: true },
    });
  }

  @Put('update/profile-info/:id')
  async updateProfileInfo(@Param('id') id: string, @Body() body: any) {
    return this.user.update({
      where: { id: id },
      data: body,
    });
  }

  @Put('admin/change-password/:id')
  async changePassword(@Param('id') id: string, @Body() body: changePasswordDto) {
    const user = await this.user.user({ id: id });
    if (!user) {
      throw new BadRequestException({
        message: 'User not found',
        statusCode: 400,
      });
    }
    const password = await this.encrypt.hashText(body.password);
    return this.user.update({
      where: { id: id },
      data: { password: password },
    });
  }
  @Put('activate/:id')
  async activateUser(@Param('id') id: string) {
    return this.user.update({
      where: { id: id },
      data: { archived: false },
    });
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.user.user({
      id: id,
    });
  }
  @Get()
  async getUsers() {
    return this.user.users({});
  }
  @Get('supervisors')
  async getSupervisors() {
    return this.user.users({
      where: { userType: 'supervisor' },
    });
  }
}
