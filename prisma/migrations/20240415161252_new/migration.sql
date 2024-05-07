/*
  Warnings:

  - You are about to drop the column `emp_id` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `overtime_hours` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `regular_hours` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `time_in1` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `time_in2` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `time_out1` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `time_out2` on the `attendancelog` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `attendancelog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reg` to the `attendancelog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "attendancelog" DROP CONSTRAINT "attendancelog_emp_id_fkey";

-- AlterTable
ALTER TABLE "attendancelog" DROP COLUMN "emp_id",
DROP COLUMN "overtime_hours",
DROP COLUMN "regular_hours",
DROP COLUMN "time_in1",
DROP COLUMN "time_in2",
DROP COLUMN "time_out1",
DROP COLUMN "time_out2",
ADD COLUMN     "attendanceDate" TIMESTAMP(3),
ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD COLUMN     "ot" TEXT,
ADD COLUMN     "reg" TEXT NOT NULL,
ADD COLUMN     "timein1" TIMESTAMP(3),
ADD COLUMN     "timein2" TIMESTAMP(3),
ADD COLUMN     "timeout1" TIMESTAMP(3),
ADD COLUMN     "timeout2" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "attendancelog" ADD CONSTRAINT "attendancelog_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
