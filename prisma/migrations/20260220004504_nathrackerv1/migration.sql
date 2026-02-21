/*
  Warnings:

  - You are about to drop the column `Encoded` on the `Swdi` table. All the data in the column will be lost.
  - Added the required column `encoded` to the `Swdi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Swdi" DROP COLUMN "Encoded",
ADD COLUMN     "encoded" TEXT NOT NULL;
