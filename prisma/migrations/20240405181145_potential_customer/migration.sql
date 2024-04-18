-- CreateTable
CREATE TABLE "PotentialCustomer" (
    "id" SERIAL NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "inquiryType" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "fileUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PotentialCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PotentialCustomer_uniqueId_key" ON "PotentialCustomer"("uniqueId");
