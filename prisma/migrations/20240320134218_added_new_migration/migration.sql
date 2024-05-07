/*
  Warnings:

  - You are about to drop the column `description` on the `department` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "department" DROP COLUMN "description";

-- CreateTable
CREATE TABLE "employeedetails" (
    "empId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "employeedetails_pkey" PRIMARY KEY ("empId")
);

-- CreateTable
CREATE TABLE "document" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "departmentId" INTEGER NOT NULL,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "position" (
    "position_id" INTEGER NOT NULL,
    "position_name" TEXT NOT NULL,

    CONSTRAINT "position_pkey" PRIMARY KEY ("position_id")
);

-- CreateTable
CREATE TABLE "leave_type" (
    "leave_type_id" INTEGER NOT NULL,
    "leave_type_name" TEXT NOT NULL,
    "description" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leave_type_pkey" PRIMARY KEY ("leave_type_id")
);
