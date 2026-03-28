/*
  Warnings:

  - You are about to drop the column `tr` on the `Pcn` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Pcn_pcn_key";

-- DropIndex
DROP INDEX "Pcn_tr_key";

-- AlterTable
ALTER TABLE "Pcn" DROP COLUMN "tr",
ADD COLUMN     "lrn" TEXT;
