/*
  Warnings:

  - You are about to drop the column `userId` on the `employeedetails` table. All the data in the column will be lost.
  - Added the required column `empId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_userId_fkey";

-- AlterTable
ALTER TABLE "employeedetails" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "empId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_empId_fkey" FOREIGN KEY ("empId") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
