/*
  Warnings:

  - You are about to drop the column `emp_id` on the `todo` table. All the data in the column will be lost.
  - Added the required column `certificate_link` to the `certificate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_link` to the `documents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "todo" DROP CONSTRAINT "todo_emp_id_fkey";

-- AlterTable
ALTER TABLE "certificate" ADD COLUMN     "certificate_link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "documents" ADD COLUMN     "file_link" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "todo" DROP COLUMN "emp_id";

-- CreateTable
CREATE TABLE "education" (
    "education_id" SERIAL NOT NULL,
    "school_name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "year_graduated" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "emp_id" TEXT NOT NULL,

    CONSTRAINT "education_pkey" PRIMARY KEY ("education_id")
);

-- CreateTable
CREATE TABLE "attendance" (
    "attendance_id" SERIAL NOT NULL,
    "emp_id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_in" TIMESTAMP(3) NOT NULL,
    "time_out" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("attendance_id")
);

-- CreateTable
CREATE TABLE "skills" (
    "skill_id" SERIAL NOT NULL,
    "skill_name" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("skill_id")
);

-- AddForeignKey
ALTER TABLE "education" ADD CONSTRAINT "education_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendance" ADD CONSTRAINT "attendance_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
