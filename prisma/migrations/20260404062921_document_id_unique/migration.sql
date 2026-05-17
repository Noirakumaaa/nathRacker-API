/*
  Warnings:

  - A unique constraint covering the columns `[documentId]` on the table `EncodedDocument` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EncodedDocument_documentId_key" ON "EncodedDocument"("documentId");
