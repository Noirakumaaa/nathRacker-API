/*
  Warnings:

  - You are about to drop the column `encoded` on the `EncodedDocument` table. All the data in the column will be lost.
  - You are about to drop the column `hhMember` on the `Miscellaneous` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfUpdate` on the `Miscellaneous` table. All the data in the column will be lost.
  - You are about to drop the column `hhMember` on the `Pcn` table. All the data in the column will be lost.
  - You are about to drop the column `typeOfUpdate` on the `Pcn` table. All the data in the column will be lost.
  - Added the required column `remarks` to the `EncodedDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subjectOfChange` to the `EncodedDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentType` to the `Miscellaneous` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EncodedDocument" DROP COLUMN "encoded",
ADD COLUMN     "remarks" TEXT NOT NULL,
ADD COLUMN     "subjectOfChange" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Miscellaneous" DROP COLUMN "hhMember",
DROP COLUMN "typeOfUpdate",
ADD COLUMN     "documentType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pcn" DROP COLUMN "hhMember",
DROP COLUMN "typeOfUpdate",
ADD COLUMN     "pcn" TEXT,
ADD COLUMN     "tr" TEXT,
ALTER COLUMN "lgu" DROP NOT NULL,
ALTER COLUMN "barangay" DROP NOT NULL,
ALTER COLUMN "granteeName" DROP NOT NULL;
