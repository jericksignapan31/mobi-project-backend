/*
  Warnings:

  - You are about to drop the column `code` on the `documents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "documents" DROP COLUMN "code",
ADD COLUMN     "doc_gov_id" TEXT;

-- AlterTable
ALTER TABLE "education" ADD COLUMN     "honor_recieved" TEXT,
ADD COLUMN     "unit_earned" TEXT;

-- AlterTable
ALTER TABLE "todo" ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- CreateTable
CREATE TABLE "work_experience" (
    "work_experience_id" SERIAL NOT NULL,
    "company_name" TEXT,
    "position" TEXT,
    "date_started" TIMESTAMP(3),
    "date_ended" TIMESTAMP(3),
    "monthly_salary" TEXT,
    "goverment_service" TEXT,
    "status_appointment" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "emp_id" TEXT NOT NULL,

    CONSTRAINT "work_experience_pkey" PRIMARY KEY ("work_experience_id")
);

-- CreateTable
CREATE TABLE "training" (
    "title_id" SERIAL NOT NULL,
    "date_start" TIMESTAMP(3),
    "date_end" TIMESTAMP(3),
    "no_of_hours" TEXT,
    "type_of_ld" TEXT,
    "conducted_by" TEXT,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_updated" TIMESTAMP(3),
    "emp_id" TEXT NOT NULL,

    CONSTRAINT "training_pkey" PRIMARY KEY ("title_id")
);

-- AddForeignKey
ALTER TABLE "work_experience" ADD CONSTRAINT "work_experience_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training" ADD CONSTRAINT "training_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
