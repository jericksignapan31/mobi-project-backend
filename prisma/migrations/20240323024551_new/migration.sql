/*
  Warnings:

  - You are about to drop the column `certificate_id` on the `employeedetails` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `employeedetails` table. All the data in the column will be lost.
  - You are about to drop the column `document_id` on the `employeedetails` table. All the data in the column will be lost.
  - You are about to drop the column `position_id` on the `employeedetails` table. All the data in the column will be lost.
  - You are about to drop the column `remark_id` on the `employeedetails` table. All the data in the column will be lost.
  - Added the required column `emp_id` to the `certificate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_id` to the `department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_id` to the `documents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_id` to the `position` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_id` to the `remark` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_certificate_id_fkey";

-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_document_id_fkey";

-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_position_id_fkey";

-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_remark_id_fkey";

-- AlterTable
ALTER TABLE "certificate" ADD COLUMN     "emp_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "department" ADD COLUMN     "emp_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "emp_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "employeedetails" DROP COLUMN "certificate_id",
DROP COLUMN "departmentId",
DROP COLUMN "document_id",
DROP COLUMN "position_id",
DROP COLUMN "remark_id";

-- AlterTable
ALTER TABLE "position" ADD COLUMN     "emp_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "remark" ADD COLUMN     "emp_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "position" ADD CONSTRAINT "position_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "remark" ADD CONSTRAINT "remark_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificate" ADD CONSTRAINT "certificate_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
