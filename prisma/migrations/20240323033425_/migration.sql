/*
  Warnings:

  - A unique constraint covering the columns `[department_id]` on the table `employeedetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "employeedetails_department_id_key" ON "employeedetails"("department_id");
