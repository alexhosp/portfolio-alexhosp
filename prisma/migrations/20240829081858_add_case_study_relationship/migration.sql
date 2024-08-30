-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "caseStudyId" INTEGER;

-- CreateTable
CREATE TABLE "CaseStudy" (
    "id" INTEGER NOT NULL,
    "contentId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "sections" JSONB NOT NULL,
    "progressStage" TEXT,
    "progressPercent" INTEGER,
    "embedUrl" TEXT,
    "mediaUrl" TEXT,
    "gitHubLink" TEXT,
    "pdfUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "CaseStudy_contentId_key" ON "CaseStudy"("contentId");

-- AddForeignKey
ALTER TABLE "CaseStudy" ADD CONSTRAINT "CaseStudy_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
