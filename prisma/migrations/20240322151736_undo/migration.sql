/*
  Warnings:

  - You are about to drop the column `empId` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_empId_fkey";

-- AlterTable
ALTER TABLE "employeedetails" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "empId";

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
