/*
  Warnings:

  - Added the required column `gender` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employeedetails" ADD COLUMN     "gender" TEXT NOT NULL;
