/*
  Warnings:

  - You are about to drop the column `emp_id` on the `department` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "employeedetails_department_id_key";

-- AlterTable
ALTER TABLE "department" DROP COLUMN "emp_id";
