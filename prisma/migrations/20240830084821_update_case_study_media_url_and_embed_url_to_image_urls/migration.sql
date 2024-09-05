/*
  Warnings:

  - You are about to drop the column `embedUrl` on the `CaseStudy` table. All the data in the column will be lost.
  - You are about to drop the column `mediaUrl` on the `CaseStudy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CaseStudy" DROP COLUMN "embedUrl",
DROP COLUMN "mediaUrl",
ADD COLUMN     "outcomeImageUrl" TEXT,
ADD COLUMN     "progressImageUrl" TEXT;
