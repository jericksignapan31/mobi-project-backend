/*
  Warnings:

  - You are about to drop the column `timein1` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `timein2` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `timeout1` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `timeout2` on the `attendancelog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "attendancelog" DROP COLUMN "timein1",
DROP COLUMN "timein2",
DROP COLUMN "timeout1",
DROP COLUMN "timeout2",
ADD COLUMN     "timeIn1" TEXT,
ADD COLUMN     "timeIn2" TEXT,
ADD COLUMN     "timeOut1" TEXT,
ADD COLUMN     "timeOut2" TEXT;
