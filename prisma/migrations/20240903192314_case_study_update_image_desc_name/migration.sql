/*
  Warnings:

  - You are about to drop the column `outcomeImageDec` on the `CaseStudy` table. All the data in the column will be lost.
  - You are about to drop the column `progressImageDec` on the `CaseStudy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CaseStudy" DROP COLUMN "outcomeImageDec",
DROP COLUMN "progressImageDec",
ADD COLUMN     "outcomeImageDesc" TEXT,
ADD COLUMN     "progressImageDesc" TEXT;
