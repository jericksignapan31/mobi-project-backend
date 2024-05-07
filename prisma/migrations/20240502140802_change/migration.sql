/*
  Warnings:

  - You are about to drop the column `employeeId` on the `otRequestTable` table. All the data in the column will be lost.
  - You are about to drop the column `ot` on the `otRequestTable` table. All the data in the column will be lost.
  - You are about to drop the column `reg` on the `otRequestTable` table. All the data in the column will be lost.
  - Added the required column `empId` to the `otRequestTable` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "otRequestTable" DROP CONSTRAINT "otRequestTable_employeeId_fkey";

-- AlterTable
ALTER TABLE "otRequestTable" DROP COLUMN "employeeId",
DROP COLUMN "ot",
DROP COLUMN "reg",
ADD COLUMN     "accountId" TEXT,
ADD COLUMN     "empId" TEXT NOT NULL,
ADD COLUMN     "forman" TEXT;

-- AddForeignKey
ALTER TABLE "otRequestTable" ADD CONSTRAINT "otRequestTable_empId_fkey" FOREIGN KEY ("empId") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "otRequestTable" ADD CONSTRAINT "otRequestTable_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
