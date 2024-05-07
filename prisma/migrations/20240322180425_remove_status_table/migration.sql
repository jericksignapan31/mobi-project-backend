/*
  Warnings:

  - You are about to drop the column `status_id` on the `employeedetails` table. All the data in the column will be lost.
  - You are about to drop the `status` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_status_id_fkey";

-- AlterTable
ALTER TABLE "employeedetails" DROP COLUMN "status_id",
ADD COLUMN     "civil_status" TEXT;

-- DropTable
DROP TABLE "status";
