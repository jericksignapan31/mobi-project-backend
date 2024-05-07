/*
  Warnings:

  - The primary key for the `employeedetails` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `birthdate` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_number` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middle_name` to the `employeedetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_empId_fkey";

-- AlterTable
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_pkey",
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "contact_number" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "middle_name" TEXT NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "empId" SET DATA TYPE TEXT,
ADD CONSTRAINT "employeedetails_pkey" PRIMARY KEY ("empId");

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
