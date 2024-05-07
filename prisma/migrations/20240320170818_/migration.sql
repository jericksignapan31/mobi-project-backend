/*
  Warnings:

  - You are about to drop the column `statusId` on the `employeedetails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[empId]` on the table `employeedetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `empIdFK` to the `department` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "department" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "empIdFK" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "employeedetails" DROP COLUMN "statusId";

-- CreateTable
CREATE TABLE "status" (
    "status_id" INTEGER NOT NULL,
    "status_name" TEXT NOT NULL,
    "empIdFK" INTEGER NOT NULL,

    CONSTRAINT "status_pkey" PRIMARY KEY ("status_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employeedetails_empId_key" ON "employeedetails"("empId");

-- AddForeignKey
ALTER TABLE "status" ADD CONSTRAINT "status_empIdFK_fkey" FOREIGN KEY ("empIdFK") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "department" ADD CONSTRAINT "department_empIdFK_fkey" FOREIGN KEY ("empIdFK") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
