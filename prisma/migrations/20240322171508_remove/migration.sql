/*
  Warnings:

  - You are about to drop the column `empId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `document` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_empId_fkey";

-- AlterTable
ALTER TABLE "employeedetails" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "empId";

-- DropTable
DROP TABLE "document";

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
