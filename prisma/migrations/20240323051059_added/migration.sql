/*
  Warnings:

  - Added the required column `address` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `basic_pay` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_hired` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employeedetails" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "basic_pay" BIGINT NOT NULL,
ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_hired" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_regularization" TIMESTAMP(3),
ADD COLUMN     "date_resigned" TIMESTAMP(3),
ADD COLUMN     "date_updated" TIMESTAMP(3),
ADD COLUMN     "profile_picture" TEXT;

-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "emp_id" TEXT NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "todo" ADD CONSTRAINT "todo_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
