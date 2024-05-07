/*
  Warnings:

  - You are about to drop the column `remark_id` on the `employeedetails` table. All the data in the column will be lost.
  - You are about to drop the `remark` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[position_id]` on the table `employeedetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `remarks` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "employeedetails" DROP CONSTRAINT "employeedetails_remark_id_fkey";

-- AlterTable
ALTER TABLE "employeedetails" DROP COLUMN "remark_id",
ADD COLUMN     "remarks" TEXT NOT NULL;

-- DropTable
DROP TABLE "remark";

-- CreateIndex
CREATE UNIQUE INDEX "employeedetails_position_id_key" ON "employeedetails"("position_id");
