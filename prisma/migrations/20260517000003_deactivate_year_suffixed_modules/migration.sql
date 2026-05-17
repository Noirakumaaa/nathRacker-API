-- Deactivate old year-suffixed module codes (e.g. DTR26, COAWTR26, HAZARD26)
-- that were replaced by catalog codes without year suffixes (DTR, COAWTR, HAZARD, etc.)
UPDATE "AaDocumentModule"
SET "isActive" = false
WHERE "code" SIMILAR TO '%[0-9][0-9]'
  AND "code" NOT IN ('OO8');
