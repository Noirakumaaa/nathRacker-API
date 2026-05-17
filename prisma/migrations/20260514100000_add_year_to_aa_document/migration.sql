-- Add year column to AaDocument (defaults to 2026 for all existing records)
ALTER TABLE "AaDocument" ADD COLUMN "year" INTEGER NOT NULL DEFAULT 2026;
