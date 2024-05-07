-- CreateTable
CREATE TABLE "leave_request" (
    "leave_request_id" SERIAL NOT NULL,
    "emp_id" TEXT NOT NULL,
    "leave_type_id" INTEGER NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,
    "reason" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "date_updated" TIMESTAMP(3),
    "support_file" TEXT,
    "with_pay" BOOLEAN,

    CONSTRAINT "leave_request_pkey" PRIMARY KEY ("leave_request_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leave_request_emp_id_key" ON "leave_request"("emp_id");

-- AddForeignKey
ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_leave_type_id_fkey" FOREIGN KEY ("leave_type_id") REFERENCES "leave_request_type"("leave_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
