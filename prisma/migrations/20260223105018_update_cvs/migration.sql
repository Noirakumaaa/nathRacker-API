/*
  Warnings:

  - You are about to drop the column `hhId` on the `EncodedDocument` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pcn]` on the table `Pcn` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tr]` on the table `Pcn` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "EncodedDocument_hhId_idx";

-- AlterTable
ALTER TABLE "Bus" ADD COLUMN     "verified" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "verifiedBy" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "EncodedDocument" DROP COLUMN "hhId",
ADD COLUMN     "idNumber" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "verified" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "verifiedBy" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Pcn" ADD COLUMN     "verified" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "verifiedBy" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Swdi" ADD COLUMN     "verified" TEXT NOT NULL DEFAULT 'NO',
ADD COLUMN     "verifiedBy" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "CVS" (
    "id" SERIAL NOT NULL,
    "idNumber" INTEGER NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CVS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CVS_id_idx" ON "CVS"("id");

-- CreateIndex
CREATE INDEX "CVS_idNumber_idx" ON "CVS"("idNumber");

-- CreateIndex
CREATE INDEX "Bus_hhId_idx" ON "Bus"("hhId");

-- CreateIndex
CREATE INDEX "EncodedDocument_id_idx" ON "EncodedDocument"("id");

-- CreateIndex
CREATE INDEX "EncodedDocument_documentId_idx" ON "EncodedDocument"("documentId");

-- CreateIndex
CREATE INDEX "Miscellaneous_id_idx" ON "Miscellaneous"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Pcn_pcn_key" ON "Pcn"("pcn");

-- CreateIndex
CREATE UNIQUE INDEX "Pcn_tr_key" ON "Pcn"("tr");

-- CreateIndex
CREATE INDEX "Pcn_hhId_idx" ON "Pcn"("hhId");

-- CreateIndex
CREATE INDEX "Pcn_granteeName_idx" ON "Pcn"("granteeName");

-- CreateIndex
CREATE INDEX "Swdi_hhId_idx" ON "Swdi"("hhId");

-- AddForeignKey
ALTER TABLE "CVS" ADD CONSTRAINT "CVS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
