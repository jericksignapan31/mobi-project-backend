/*
  Warnings:

  - You are about to drop the column `empIdFK` on the `department` table. All the data in the column will be lost.
  - You are about to drop the column `empIdFK` on the `status` table. All the data in the column will be lost.
  - You are about to drop the `leave_type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `departmentId` to the `employeedetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "department" DROP CONSTRAINT "department_empIdFK_fkey";

-- DropForeignKey
ALTER TABLE "status" DROP CONSTRAINT "status_empIdFK_fkey";

-- AlterTable
ALTER TABLE "department" DROP COLUMN "empIdFK",
ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_updated" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "document" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_updated" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "employeedetails" ADD COLUMN     "certificate_id" INTEGER,
ADD COLUMN     "departmentId" INTEGER NOT NULL,
ADD COLUMN     "document_id" INTEGER,
ADD COLUMN     "position_id" INTEGER,
ADD COLUMN     "remark_id" INTEGER,
ADD COLUMN     "status_id" INTEGER;

-- AlterTable
CREATE SEQUENCE position_position_id_seq;
ALTER TABLE "position" ADD COLUMN     "archived" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date_updated" TIMESTAMP(3),
ALTER COLUMN "position_id" SET DEFAULT nextval('position_position_id_seq');
ALTER SEQUENCE position_position_id_seq OWNED BY "position"."position_id";

-- AlterTable
CREATE SEQUENCE status_status_id_seq;
ALTER TABLE "status" DROP COLUMN "empIdFK",
ALTER COLUMN "status_id" SET DEFAULT nextval('status_status_id_seq');
ALTER SEQUENCE status_status_id_seq OWNED BY "status"."status_id";

-- DropTable
DROP TABLE "leave_type";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "userType" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_request_type" (
    "leave_type_id" INTEGER NOT NULL,
    "leave_type_name" TEXT NOT NULL,
    "description" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "leave_request_type_pkey" PRIMARY KEY ("leave_type_id")
);

-- CreateTable
CREATE TABLE "remark" (
    "remark_id" SERIAL NOT NULL,
    "remark_name" TEXT NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "remark_pkey" PRIMARY KEY ("remark_id")
);

-- CreateTable
CREATE TABLE "documents" (
    "document_id" SERIAL NOT NULL,
    "document_name" TEXT NOT NULL,
    "code" TEXT,
    "status" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),

    CONSTRAINT "documents_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "certificate" (
    "certificate_id" SERIAL NOT NULL,
    "certificate_name" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),

    CONSTRAINT "certificate_pkey" PRIMARY KEY ("certificate_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_empId_fkey" FOREIGN KEY ("empId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "status"("status_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_remark_id_fkey" FOREIGN KEY ("remark_id") REFERENCES "remark"("remark_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "documents"("document_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_certificate_id_fkey" FOREIGN KEY ("certificate_id") REFERENCES "certificate"("certificate_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employeedetails" ADD CONSTRAINT "employeedetails_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "position"("position_id") ON DELETE SET NULL ON UPDATE CASCADE;
