import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from 'src/employee/employee.service';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { arch } from 'os';
import { CreateUserDto } from 'src/user/models/create-user.dto';
@Injectable()
export class AuthService {
  constructor ( private jwt : JwtService, private user : UserService) {}
  async validateUser(username: string, password: string) {
    const user = await this.user.users({where: {username}});
    if(user[0]) {
      const isMatch = await bcrypt.compare(password, user[0].password);
      if(isMatch) {
        const { password, ...result } = user[0];
        return result;
      }
    }
    return null;
  }
  async isGranted(user: any) {
    const payload = { name: user.username, id: user.id, userType: user.userType, archived: user.archived, isPasswordChanged: user.isPasswordChanged};
    return {
      status: 200,
      message: 'Successfull Login',
      access_token: this.jwt.sign(payload),
    }
  }
}
