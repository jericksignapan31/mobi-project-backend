/*
  Warnings:

  - Added the required column `emp_id` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "emp_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
