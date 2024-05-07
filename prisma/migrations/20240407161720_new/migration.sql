-- CreateTable
CREATE TABLE "attendancelog" (
    "id" TEXT NOT NULL,
    "emp_id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_in1" TIMESTAMP(3),
    "time_out1" TIMESTAMP(3),
    "time_in2" TIMESTAMP(3),
    "time_out2" TIMESTAMP(3),
    "regular_hours" TEXT,
    "overtime_hours" TEXT,

    CONSTRAINT "attendancelog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "attendancelog" ADD CONSTRAINT "attendancelog_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "employeedetails"("empId") ON DELETE RESTRICT ON UPDATE CASCADE;
