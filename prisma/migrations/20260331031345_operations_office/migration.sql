-- AlterTable
ALTER TABLE "UserInfo" ADD COLUMN     "assignedBarangayId" INTEGER,
ADD COLUMN     "assignedLGUID" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "assignedOperationId" INTEGER,
ADD COLUMN     "middleName" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "OperationsOfficeNum" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "OperationsOfficeNum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lgu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "operationsOfficeNumId" INTEGER NOT NULL,

    CONSTRAINT "Lgu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barangay" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lguId" INTEGER NOT NULL,

    CONSTRAINT "Barangay_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedOperationId_fkey" FOREIGN KEY ("assignedOperationId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedLGUID_fkey" FOREIGN KEY ("assignedLGUID") REFERENCES "Lgu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedBarangayId_fkey" FOREIGN KEY ("assignedBarangayId") REFERENCES "Barangay"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lgu" ADD CONSTRAINT "Lgu_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Barangay" ADD CONSTRAINT "Barangay_lguId_fkey" FOREIGN KEY ("lguId") REFERENCES "Lgu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
