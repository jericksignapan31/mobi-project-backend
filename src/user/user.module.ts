import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { EncryptionService } from 'src/core/services/encryption/encryption.service';
import { EmployeeService } from 'src/employee/employee.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserService, PrismaService, EncryptionService, EmployeeService, JwtService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
