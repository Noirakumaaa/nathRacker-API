-- AlterTable
ALTER TABLE "Bus" ADD COLUMN     "operationsOfficeNumId" INTEGER;

-- AlterTable
ALTER TABLE "CVS" ADD COLUMN     "operationsOfficeNumId" INTEGER;

-- AlterTable
ALTER TABLE "EncodedDocument" ADD COLUMN     "operationsOfficeNumId" INTEGER;

-- AlterTable
ALTER TABLE "Miscellaneous" ADD COLUMN     "operationsOfficeNumId" INTEGER;

-- AlterTable
ALTER TABLE "Pcn" ADD COLUMN     "operationsOfficeNumId" INTEGER;

-- AlterTable
ALTER TABLE "Swdi" ADD COLUMN     "operationsOfficeNumId" INTEGER;

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Swdi" ADD CONSTRAINT "Swdi_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pcn" ADD CONSTRAINT "Pcn_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CVS" ADD CONSTRAINT "CVS_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Miscellaneous" ADD CONSTRAINT "Miscellaneous_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncodedDocument" ADD CONSTRAINT "EncodedDocument_operationsOfficeNumId_fkey" FOREIGN KEY ("operationsOfficeNumId") REFERENCES "OperationsOfficeNum"("id") ON DELETE SET NULL ON UPDATE CASCADE;
