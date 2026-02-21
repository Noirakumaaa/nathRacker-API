/*
  Warnings:

  - Added the required column `govUsername` to the `EncodedDocument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EncodedDocument" ADD COLUMN     "govUsername" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EncodedDocument" ADD CONSTRAINT "EncodedDocument_govUsername_fkey" FOREIGN KEY ("govUsername") REFERENCES "User"("govUsername") ON DELETE RESTRICT ON UPDATE CASCADE;
