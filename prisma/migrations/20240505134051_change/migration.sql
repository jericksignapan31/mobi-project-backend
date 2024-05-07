/*
  Warnings:

  - Added the required column `batch_id` to the `otRequestTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "otRequestTable" ADD COLUMN     "batch_id" TEXT NOT NULL;
