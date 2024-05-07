/*
  Warnings:

  - A unique constraint covering the columns `[emp_id]` on the table `attendance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emp_id]` on the table `certificate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emp_id]` on the table `training` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emp_id]` on the table `work_experience` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "attendance_emp_id_key" ON "attendance"("emp_id");

-- CreateIndex
CREATE UNIQUE INDEX "certificate_emp_id_key" ON "certificate"("emp_id");

-- CreateIndex
CREATE UNIQUE INDEX "training_emp_id_key" ON "training"("emp_id");

-- CreateIndex
CREATE UNIQUE INDEX "work_experience_emp_id_key" ON "work_experience"("emp_id");
