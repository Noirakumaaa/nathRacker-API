-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ENCODER', 'ADMIN', 'AC', 'SWOIII', 'VERIFIER');

-- CreateEnum
CREATE TYPE "theme" AS ENUM ('LIGHT', 'DARK');

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

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "govUsername" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ENCODER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInfo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "middleName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "sessionTime" INTEGER NOT NULL DEFAULT 30,
    "language" TEXT NOT NULL DEFAULT 'ENGLISH',
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "theme" "theme" NOT NULL DEFAULT 'DARK',
    "twoFactorAuth" BOOLEAN NOT NULL DEFAULT false,
    "smsAlert" BOOLEAN NOT NULL DEFAULT false,
    "loginAlert" BOOLEAN NOT NULL DEFAULT false,
    "SecuritAlert" BOOLEAN NOT NULL DEFAULT false,
    "emailAlert" BOOLEAN NOT NULL DEFAULT false,
    "weeklyReportAlert" BOOLEAN NOT NULL DEFAULT false,
    "assignedOperationId" INTEGER,
    "assignedLGUID" INTEGER,
    "assignedBarangayId" INTEGER,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bus" (
    "id" SERIAL NOT NULL,
    "hhId" TEXT NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "granteeName" TEXT NOT NULL,
    "typeOfUpdate" TEXT NOT NULL,
    "subjectOfChange" TEXT NOT NULL,
    "drn" TEXT NOT NULL,
    "cl" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "encodedBy" TEXT NOT NULL,
    "updateInfo" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "note" TEXT,
    "issue" TEXT,
    "verificationIssue" TEXT,
    "verifiedBy" TEXT NOT NULL DEFAULT '',
    "verified" TEXT NOT NULL DEFAULT 'NO',
    "userId" INTEGER NOT NULL,
    "operationsOfficeNumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Swdi" (
    "id" SERIAL NOT NULL,
    "hhId" TEXT NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "grantee" TEXT NOT NULL,
    "swdiScore" DOUBLE PRECISION NOT NULL,
    "swdiLevel" TEXT NOT NULL,
    "drn" TEXT,
    "cl" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "encodedBy" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "note" TEXT,
    "issue" TEXT,
    "verifiedBy" TEXT NOT NULL DEFAULT '',
    "verified" TEXT NOT NULL DEFAULT 'NO',
    "userId" INTEGER NOT NULL,
    "operationsOfficeNumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Swdi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pcn" (
    "id" SERIAL NOT NULL,
    "hhId" TEXT NOT NULL,
    "lgu" TEXT,
    "barangay" TEXT,
    "granteeName" TEXT,
    "subjectOfChange" TEXT NOT NULL,
    "pcn" TEXT,
    "lrn" TEXT,
    "drn" TEXT,
    "cl" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "encodedBy" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "note" TEXT,
    "issue" TEXT,
    "verifiedBy" TEXT NOT NULL DEFAULT '',
    "verified" TEXT NOT NULL DEFAULT 'NO',
    "userId" INTEGER NOT NULL,
    "operationsOfficeNumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pcn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CVS" (
    "id" SERIAL NOT NULL,
    "idNumber" TEXT NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "facilityName" TEXT NOT NULL,
    "formType" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "remarks" TEXT NOT NULL,
    "issue" TEXT,
    "userId" INTEGER NOT NULL,
    "operationsOfficeNumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CVS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Miscellaneous" (
    "id" SERIAL NOT NULL,
    "hhId" TEXT NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "granteeName" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "subjectOfChange" TEXT,
    "drn" TEXT,
    "cl" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "encodedBy" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "note" TEXT,
    "issue" TEXT,
    "userId" INTEGER NOT NULL,
    "operationsOfficeNumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Miscellaneous_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncodedDocument" (
    "id" SERIAL NOT NULL,
    "idNumber" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentId" INTEGER NOT NULL,
    "subjectOfChange" TEXT NOT NULL,
    "drn" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "govUsername" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "verifiedBy" TEXT NOT NULL DEFAULT '',
    "verified" TEXT NOT NULL DEFAULT 'NO',
    "userId" INTEGER NOT NULL,
    "operationsOfficeNumId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EncodedDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_govUsername_key" ON "User"("govUsername");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userId_key" ON "UserInfo"("userId");

-- CreateIndex
CREATE INDEX "Bus_hhId_idx" ON "Bus"("hhId");

-- CreateIndex
CREATE INDEX "Swdi_hhId_idx" ON "Swdi"("hhId");

-- CreateIndex
CREATE INDEX "Pcn_hhId_idx" ON "Pcn"("hhId");

-- CreateIndex
CREATE INDEX "Pcn_granteeName_idx" ON "Pcn"("granteeName");

-- CreateIndex
CREATE INDEX "CVS_id_idx" ON "CVS"("id");

-- CreateIndex
CREATE INDEX "CVS_idNumber_idx" ON "CVS"("idNumber");

-- CreateIndex
CREATE INDEX "Miscellaneous_id_idx" ON "Miscellaneous"("id");

-- CreateIndex
CREATE INDEX "EncodedDocument_id_idx" ON "EncodedDocument"("id");

-- CreateIndex
CREATE INDEX "EncodedDocument_documentId_idx" ON "EncodedDocument"("documentId");

-- AddForeignKey
ALTER TABLE "Lgu" ADD CONSTRAINT "Lgu_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Barangay" ADD CONSTRAINT "Barangay_lguId_fkey" FOREIGN KEY ("lguId") REFERENCES "Lgu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedOperationId_fkey" FOREIGN KEY ("assignedOperationId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedLGUID_fkey" FOREIGN KEY ("assignedLGUID") REFERENCES "Lgu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_assignedBarangayId_fkey" FOREIGN KEY ("assignedBarangayId") REFERENCES "Barangay"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Swdi" ADD CONSTRAINT "Swdi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Swdi" ADD CONSTRAINT "Swdi_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pcn" ADD CONSTRAINT "Pcn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pcn" ADD CONSTRAINT "Pcn_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CVS" ADD CONSTRAINT "CVS_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CVS" ADD CONSTRAINT "CVS_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Miscellaneous" ADD CONSTRAINT "Miscellaneous_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Miscellaneous" ADD CONSTRAINT "Miscellaneous_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncodedDocument" ADD CONSTRAINT "EncodedDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncodedDocument" ADD CONSTRAINT "EncodedDocument_govUsername_fkey" FOREIGN KEY ("govUsername") REFERENCES "User"("govUsername") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncodedDocument" ADD CONSTRAINT "EncodedDocument_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;
