/*
  Warnings:

  - A unique constraint covering the columns `[emp_id]` on the table `documents` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "documents_emp_id_key" ON "documents"("emp_id");
