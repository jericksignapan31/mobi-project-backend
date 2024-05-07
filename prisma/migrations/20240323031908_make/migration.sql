/*
  Warnings:

  - You are about to drop the column `emp_id` on the `position` table. All the data in the column will be lost.
  - You are about to drop the column `emp_id` on the `remark` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `employeedetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `position_id` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remark_id` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "department" DROP CONSTRAINT "department_emp_id_fkey";

-- DropForeignKey
ALTER TABLE "position" DROP CONSTRAINT "position_emp_id_fkey";

-- DropForeignKey
ALTER TABLE "remark" DROP CONSTRAINT "remark_emp_id_fkey";

-- AlterTable
ALTER TABLE "employeedetails" ADD COLUMN     "department_id" INTEGER,
ADD COLUMN     "position_id" INTEGER NOT NULL,
ADD COLUMN     "remark_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "position" DROP COLUMN "emp_id";

-- AlterTable
ALTER TABLE "remark" DROP COLUMN "emp_id";

-- CreateIndex
CREATE UNIQUE INDEX "employeedetails_user_id_key" ON "employeedetails"("user_id");

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "position"("position_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_remark_id_fkey" FOREIGN KEY ("remark_id") REFERENCES "remark"("remark_id") ON DELETE RESTRICT ON UPDATE CASCADE;
