-- DRN is now unique per (module, year) instead of globally unique.
-- This allows each year to restart the sequence from 0001.

-- Drop old global unique index on trackingNo
DROP INDEX "AaDocument_trackingNo_key";

-- Drop old unique index on (moduleId, sequence)
DROP INDEX "AaDocument_moduleId_sequence_key";

-- Drop old index on (moduleId, dateCreated)
DROP INDEX "AaDocument_moduleId_dateCreated_idx";

-- Add year-scoped unique indexes
CREATE UNIQUE INDEX "AaDocument_moduleId_year_sequence_key" ON "AaDocument" ("moduleId", "year", "sequence");
CREATE UNIQUE INDEX "AaDocument_moduleId_year_trackingNo_key" ON "AaDocument" ("moduleId", "year", "trackingNo");

-- Add year-scoped index
CREATE INDEX "AaDocument_moduleId_year_dateCreated_idx" ON "AaDocument" ("moduleId", "year", "dateCreated");
