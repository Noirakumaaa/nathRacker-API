/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `UserInfo` table. All the data in the column will be lost.
  - You are about to drop the column `govUsername` on the `UserInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[govUsername]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `govUsername` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "govUsername" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "email",
DROP COLUMN "govUsername";

-- CreateIndex
CREATE UNIQUE INDEX "User_govUsername_key" ON "User"("govUsername");

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
