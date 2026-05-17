-- AlterTable
ALTER TABLE "EncodedDocument" ADD COLUMN     "typeOfUpdate" TEXT;

-- AlterTable
ALTER TABLE "UserInfo" ALTER COLUMN "sessionTime" SET DEFAULT 1800000;
