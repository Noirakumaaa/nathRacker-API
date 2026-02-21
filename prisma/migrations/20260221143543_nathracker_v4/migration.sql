/*
  Warnings:

  - The `sessionTime` column on the `UserInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `swdiScore` on the `Swdi` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Swdi" ADD COLUMN     "cl" TEXT,
ADD COLUMN     "drn" TEXT,
DROP COLUMN "swdiScore",
ADD COLUMN     "swdiScore" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "UserInfo" DROP COLUMN "sessionTime",
ADD COLUMN     "sessionTime" INTEGER NOT NULL DEFAULT 30;
