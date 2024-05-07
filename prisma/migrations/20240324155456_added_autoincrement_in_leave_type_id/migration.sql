-- AlterTable
CREATE SEQUENCE leave_request_type_leave_type_id_seq;
ALTER TABLE "leave_request_type" ALTER COLUMN "leave_type_id" SET DEFAULT nextval('leave_request_type_leave_type_id_seq');
ALTER SEQUENCE leave_request_type_leave_type_id_seq OWNED BY "leave_request_type"."leave_type_id";
