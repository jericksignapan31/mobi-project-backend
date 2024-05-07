/*
  Warnings:

  - A unique constraint covering the columns `[emp_id]` on the table `skills` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "skills_emp_id_key" ON "skills"("emp_id");
