import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDTO } from './model/login.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth Module')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() body: loginDTO) {
    const result = await this.authService.validateUser(body.username, body.password);
    if(result == null) {
      throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
    }
    return this.authService.isGranted(result);
  }
}
