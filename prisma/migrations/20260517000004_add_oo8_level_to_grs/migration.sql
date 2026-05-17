-- Add optional OO8 level field to AaDocument (used by GRS module)
ALTER TABLE "AaDocument" ADD COLUMN IF NOT EXISTS "oo8Level" TEXT;
