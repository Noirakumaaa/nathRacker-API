-- Add documentId FK to CoaWTr2026
ALTER TABLE "CoaWTr2026" ADD COLUMN "documentId" TEXT;
ALTER TABLE "CoaWTr2026" ADD CONSTRAINT "CoaWTr2026_documentId_key" UNIQUE ("documentId");
ALTER TABLE "CoaWTr2026" ADD CONSTRAINT "CoaWTr2026_documentId_fkey"
  FOREIGN KEY ("documentId") REFERENCES "AaDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add documentId FK to Hazard2026
ALTER TABLE "Hazard2026" ADD COLUMN "documentId" TEXT;
ALTER TABLE "Hazard2026" ADD CONSTRAINT "Hazard2026_documentId_key" UNIQUE ("documentId");
ALTER TABLE "Hazard2026" ADD CONSTRAINT "Hazard2026_documentId_fkey"
  FOREIGN KEY ("documentId") REFERENCES "AaDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add documentId FK to Tev2026
ALTER TABLE "Tev2026" ADD COLUMN "documentId" TEXT;
ALTER TABLE "Tev2026" ADD CONSTRAINT "Tev2026_documentId_key" UNIQUE ("documentId");
ALTER TABLE "Tev2026" ADD CONSTRAINT "Tev2026_documentId_fkey"
  FOREIGN KEY ("documentId") REFERENCES "AaDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add documentId FK to MagnaCarta2026
ALTER TABLE "MagnaCarta2026" ADD COLUMN "documentId" TEXT;
ALTER TABLE "MagnaCarta2026" ADD CONSTRAINT "MagnaCarta2026_documentId_key" UNIQUE ("documentId");
ALTER TABLE "MagnaCarta2026" ADD CONSTRAINT "MagnaCarta2026_documentId_fkey"
  FOREIGN KEY ("documentId") REFERENCES "AaDocument"("id") ON DELETE SET NULL ON UPDATE CASCADE;
