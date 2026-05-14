-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SWA';

-- CreateTable
CREATE TABLE "AaDocumentModule" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AaDocumentModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AaDocument" (
    "id" TEXT NOT NULL,
    "trackingNo" TEXT NOT NULL,
    "sequence" INTEGER NOT NULL,
    "staffName" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL,
    "moduleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AaDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AaRemark" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "remarkDate" TIMESTAMP(3),
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AaRemark_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AaDocumentModule_code_key" ON "AaDocumentModule"("code");

-- CreateIndex
CREATE UNIQUE INDEX "AaDocument_trackingNo_key" ON "AaDocument"("trackingNo");

-- CreateIndex
CREATE INDEX "AaDocument_moduleId_dateCreated_idx" ON "AaDocument"("moduleId", "dateCreated");

-- CreateIndex
CREATE INDEX "AaDocument_staffName_idx" ON "AaDocument"("staffName");

-- CreateIndex
CREATE UNIQUE INDEX "AaDocument_moduleId_sequence_key" ON "AaDocument"("moduleId", "sequence");

-- CreateIndex
CREATE INDEX "AaRemark_documentId_order_idx" ON "AaRemark"("documentId", "order");

-- AddForeignKey
ALTER TABLE "AaDocument" ADD CONSTRAINT "AaDocument_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "AaDocumentModule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AaRemark" ADD CONSTRAINT "AaRemark_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "AaDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;
