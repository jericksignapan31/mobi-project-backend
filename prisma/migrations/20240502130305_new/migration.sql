/*
  Warnings:

  - You are about to drop the column `ot` on the `attendancelog` table. All the data in the column will be lost.
  - You are about to drop the column `reg` on the `attendancelog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "attendancelog" DROP COLUMN "ot",
DROP COLUMN "reg",
ADD COLUMN     "totalHours" TEXT;

-- CreateTable
CREATE TABLE "otRequestTable" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "otDate" TIMESTAMP(3),
    "timeIn" TEXT,
    "timeOut" TEXT,
    "totalHours" TEXT,
    "reg" TEXT,
    "ot" TEXT,
    "status" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),

    CONSTRAINT "otRequestTable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "otRequestTable" ADD CONSTRAINT "otRequestTable_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
