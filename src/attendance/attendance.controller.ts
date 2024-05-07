import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, BadRequestException, UseGuards, Put } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import * as xlsx from 'xlsx';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { PrismaService } from 'src/core/services/prisma/prisma.service';
import { uploadFileDTO } from './dto/upload-file.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/services/auth/guard/auth.guard';

@Controller('attendance')
@ApiTags('Attendance Module')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService, private prisma : PrismaService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File ) {
    console.log(file)
  }

  @Post('batchimport')
  @UseInterceptors(FileInterceptor('file'))
  async batchImport(@UploadedFile() file){
    if (!file) {
      throw new BadRequestException({ message: 'No file uploaded' });
    }

    let logs;
    if (file.originalname.endsWith('.csv')) {
      logs = await this.parseCSV(file.path);
    } else if (file.originalname.endsWith('.xlsx')) {
      logs = await this.parseXLSX(file.path);
    } else {
      throw new BadRequestException({ message: 'Invalid file format' });
    }

    await this.attendanceService.batchImport(logs);

    return { message: 'Data imported successfully' };
  }

  @Post('batchimport/attendance')
  async batchImportAttendance(@Body() data: CreateAttendanceDto[]) {
    return this.attendanceService.createAttendanceEntries(data);
  }

  private async parseCSV(filePath: string): Promise<any[]> {
    const results = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }

  private async parseXLSX(filePath: string): Promise<any[]> {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return xlsx.utils.sheet_to_json(sheet);
  }

  private async saveData(data: any[]) {
    return this.attendanceService.batchImport(data);
  }

  @Post('create')
  async create(@Body() createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Get('employee/:id')
  async getAttendanceByEmployee(@Param('id') id: string) {
    return this.prisma.attendancelog.findMany({
      where: {
        employeeId: id
      },
      include: {
        employee: true
      }
    });
  }
  @Get()
  async getallattendance() {
    return this.attendanceService.attendance({});
  }
  @Get(':id')
  async getAttendanceById(@Param('id') id: string) {
    return this.attendanceService.attendance({
      where: {
        id: id
      }
    })
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAttendanceDto: CreateAttendanceDto) {
    return this.attendanceService.update(id, updateAttendanceDto);
  }
}
