-- DropForeignKey
ALTER TABLE "UserInfo" DROP CONSTRAINT "UserInfo_assignedLGUID_fkey";

-- AlterTable
ALTER TABLE "UserInfo" ALTER COLUMN "assignedLGUID" DROP NOT NULL,
ALTER COLUMN "assignedLGUID" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedLGUID_fkey" FOREIGN KEY ("assignedLGUID") REFERENCES "Lgu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
