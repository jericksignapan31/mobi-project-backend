import { ApiProperty } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty({ description: 'Employee ID' })
  employeeId: string;
  @ApiProperty({ description: 'Date' })
  attendanceDate : string 
  @ApiProperty({ description: 'First time in' })
  timeIn1?: string
  @ApiProperty({ description: 'First time out' })
  timeOut1?: string
  @ApiProperty({ description: 'Second time in' })
  timeIn2?: string
  @ApiProperty({ description: 'Second time out' })
  timeOut2?: string
  @ApiProperty({ description: 'Regular hours worked' })
  reg: string;
  @ApiProperty({ description: 'Overtime hours worked' })
  ot?: string
  @ApiProperty({ description: 'Total hours worked' })
  totalHours: string
}
