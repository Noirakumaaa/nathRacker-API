-- CreateEnum
CREATE TYPE "theme" AS ENUM ('LIGHT', 'DARK');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ENCODER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ENCODER',
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserInfo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL,
    "govUsername" TEXT NOT NULL,
    "sessionTime" TEXT NOT NULL DEFAULT '30',
    "language" TEXT NOT NULL DEFAULT 'ENGLISH',
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "twoFactorAuth" BOOLEAN NOT NULL DEFAULT false,
    "smsAlert" BOOLEAN NOT NULL DEFAULT false,
    "loginAlert" BOOLEAN NOT NULL DEFAULT false,
    "SecuritAlert" BOOLEAN NOT NULL DEFAULT false,
    "emailAlert" BOOLEAN NOT NULL DEFAULT false,
    "weeklyReportAlert" BOOLEAN NOT NULL DEFAULT false,
    "theme" "theme" NOT NULL DEFAULT 'DARK',

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bus" (
    "id" SERIAL NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "hhId" TEXT NOT NULL,
    "granteeName" TEXT NOT NULL,
    "typeOfUpdate" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "issue" TEXT,
    "encodedBy" TEXT NOT NULL,
    "updateInfo" TEXT NOT NULL,
    "subjectOfChange" TEXT NOT NULL,
    "drn" TEXT NOT NULL,
    "cl" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "userId" INTEGER NOT NULL,
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
    "status" TEXT NOT NULL,
    "swdiScore" TEXT NOT NULL,
    "swdiLevel" TEXT NOT NULL,
    "encodedBy" TEXT NOT NULL,
    "Encoded" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "issue" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Swdi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pcn" (
    "id" SERIAL NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "hhId" TEXT NOT NULL,
    "granteeName" TEXT NOT NULL,
    "hhMember" TEXT NOT NULL,
    "typeOfUpdate" TEXT NOT NULL DEFAULT 'PCN',
    "remarks" TEXT NOT NULL,
    "issue" TEXT,
    "encodedBy" TEXT NOT NULL,
    "subjectOfChange" TEXT NOT NULL,
    "drn" TEXT,
    "cl" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pcn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Miscellaneous" (
    "id" SERIAL NOT NULL,
    "lgu" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "hhId" TEXT NOT NULL,
    "granteeName" TEXT NOT NULL,
    "hhMember" TEXT,
    "typeOfUpdate" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "issue" TEXT,
    "encodedBy" TEXT NOT NULL,
    "subjectOfChange" TEXT,
    "drn" TEXT,
    "cl" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "note" TEXT,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Miscellaneous_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncodedDocument" (
    "id" SERIAL NOT NULL,
    "hhId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "documentType" TEXT NOT NULL,
    "documentId" INTEGER NOT NULL,
    "encoded" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EncodedDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userId_key" ON "UserInfo"("userId");

-- CreateIndex
CREATE INDEX "EncodedDocument_hhId_idx" ON "EncodedDocument"("hhId");

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Swdi" ADD CONSTRAINT "Swdi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pcn" ADD CONSTRAINT "Pcn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Miscellaneous" ADD CONSTRAINT "Miscellaneous_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncodedDocument" ADD CONSTRAINT "EncodedDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
