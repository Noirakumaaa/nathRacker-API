CREATE TABLE IF NOT EXISTS "AaMonthlyData" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AaMonthlyData_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "AaMonthlyData_documentId_key" ON "AaMonthlyData"("documentId");

ALTER TABLE "AaMonthlyData" ADD CONSTRAINT "AaMonthlyData_documentId_fkey"
    FOREIGN KEY ("documentId") REFERENCES "AaDocument"("id") ON DELETE CASCADE ON UPDATE CASCADE;
