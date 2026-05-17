-- CreateTable
CREATE TABLE "EdtmsTrackingRequest" (
    "id" SERIAL NOT NULL,
    "edtmsNumber" TEXT,
    "staffRequesting" TEXT,
    "dateCreated" TEXT,
    "subject" TEXT,
    "uploadedBy" TEXT,
    "uploadDate" TEXT,
    "remarks" TEXT,
    "dateForwarded" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EdtmsTrackingRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CvsTracking" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "documentTitle" TEXT,
    "dateSubmitted" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CvsTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BdmTracking" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "subject" TEXT,
    "dateCreated" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "remarks7" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BdmTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrsTracking" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "referredToGrsRpmo" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "dateSubmittedJnt" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "remarks7" TEXT,
    "remarks8" TEXT,
    "remarks9" TEXT,
    "remarks10" TEXT,
    "remarks11" TEXT,
    "remarks12" TEXT,
    "remarks13" TEXT,
    "remarks14" TEXT,
    "remarks15" TEXT,
    "remarks16" TEXT,
    "remarks17" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GrsTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MneTracking" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "activityDocumentation" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "remarks7" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MneTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OoLevel" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "remarks7" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OoLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Oo8IncomingFiles" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "edtms" TEXT,
    "fromParty" TEXT,
    "addressedTo" TEXT,
    "documentTitle" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Oo8IncomingFiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingFeedbacks" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "dateSubmittedJnt" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingFeedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelRequest" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "coveredDates01" TEXT,
    "coveredDates02" TEXT,
    "coveredDates03" TEXT,
    "coveredDates04" TEXT,
    "coveredDates05" TEXT,
    "coveredDates06" TEXT,
    "coveredDates07" TEXT,
    "coveredDates08" TEXT,
    "coveredDates09" TEXT,
    "coveredDates10" TEXT,
    "coveredDates11" TEXT,
    "coveredDates12" TEXT,
    "coveredDates13" TEXT,
    "coveredDates14" TEXT,
    "coveredDates15" TEXT,
    "coveredDates16" TEXT,
    "coveredDates17" TEXT,
    "coveredDates18" TEXT,
    "coveredDates19" TEXT,
    "coveredDates20" TEXT,
    "coveredDates21" TEXT,
    "coveredDates22" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TravelRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MrbTofMonitoring" (
    "id" SERIAL NOT NULL,
    "ooLevelDrnNumber" TEXT,
    "dateForwardedToMrb" TEXT,
    "assignedCitylink" TEXT,
    "mrbInCharge" TEXT,
    "tofNumber" TEXT,
    "requestTitle" TEXT,
    "dateForwardedToCgu" TEXT,
    "remarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MrbTofMonitoring_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoaWTr2026" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "january" TEXT,
    "janRemarksMe1" TEXT,
    "janRemarksMe2" TEXT,
    "february" TEXT,
    "febRemarksMe" TEXT,
    "march" TEXT,
    "marRemarksMe" TEXT,
    "april" TEXT,
    "aprRemarksMe" TEXT,
    "may" TEXT,
    "mayRemarksMe" TEXT,
    "june" TEXT,
    "junRemarksMe" TEXT,
    "july" TEXT,
    "julRemarksMe" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CoaWTr2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FiledForCocot" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "janRemarks1" TEXT,
    "janRemarks2" TEXT,
    "janRemarks3" TEXT,
    "february" TEXT,
    "febRemarks1" TEXT,
    "febRemarks2" TEXT,
    "febRemarks3" TEXT,
    "febRemarks4" TEXT,
    "febRemarks5" TEXT,
    "febRemarks6" TEXT,
    "febRemarks7" TEXT,
    "febRemarks8" TEXT,
    "april" TEXT,
    "may" TEXT,
    "mayRemarks1" TEXT,
    "mayRemarks2" TEXT,
    "june" TEXT,
    "junRemarks1" TEXT,
    "junRemarks2" TEXT,
    "july" TEXT,
    "julRemarks1" TEXT,
    "julRemarks2" TEXT,
    "julRemarks3" TEXT,
    "august" TEXT,
    "augRemarks" TEXT,
    "september" TEXT,
    "sepRemarks1" TEXT,
    "sepRemarks2" TEXT,
    "sepRemarks3" TEXT,
    "october" TEXT,
    "octRemarks1" TEXT,
    "octRemarks2" TEXT,
    "octRemarks3" TEXT,
    "november" TEXT,
    "novRemarks1" TEXT,
    "novRemarks2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FiledForCocot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuccessStories" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "dateUploadedDrive" TEXT,
    "storyType" TEXT,
    "kwentoPangarap" TEXT,
    "kwentoPagtataya" TEXT,
    "kwentoPagtataguyod" TEXT,
    "kwentoPagbabago" TEXT,
    "googleLinkFolder" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SuccessStories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dtr2026" (
    "id" SERIAL NOT NULL,
    "number" TEXT,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "december2025" TEXT,
    "decRemarks1" TEXT,
    "decRemarks2" TEXT,
    "january" TEXT,
    "janRemarks1" TEXT,
    "janRemarks2" TEXT,
    "february" TEXT,
    "febRemarks" TEXT,
    "march" TEXT,
    "marRemarks" TEXT,
    "april" TEXT,
    "aprRemarks" TEXT,
    "may" TEXT,
    "mayRemarks1" TEXT,
    "mayRemarks2" TEXT,
    "june" TEXT,
    "junRemarks1" TEXT,
    "junRemarks2" TEXT,
    "july" TEXT,
    "julRemarks1" TEXT,
    "julRemarks2" TEXT,
    "julRemarks3" TEXT,
    "august" TEXT,
    "augRemarks" TEXT,
    "september" TEXT,
    "sepRemarks1" TEXT,
    "sepRemarks2" TEXT,
    "sepRemarks3" TEXT,
    "october" TEXT,
    "octRemarks1" TEXT,
    "octRemarks2" TEXT,
    "octRemarks3" TEXT,
    "november" TEXT,
    "novRemarks1" TEXT,
    "novRemarks2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dtr2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hazard2026" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "january" TEXT,
    "janRemarks1" TEXT,
    "janRemarks2" TEXT,
    "february" TEXT,
    "febRemarks1" TEXT,
    "febRemarks2" TEXT,
    "march" TEXT,
    "marRemarks1" TEXT,
    "marRemarks2" TEXT,
    "april" TEXT,
    "aprRemarks1" TEXT,
    "aprRemarks2" TEXT,
    "may" TEXT,
    "mayRemarks1" TEXT,
    "mayRemarks2" TEXT,
    "june" TEXT,
    "junRemarks1" TEXT,
    "junRemarks2" TEXT,
    "july" TEXT,
    "julRemarks1" TEXT,
    "julRemarks2" TEXT,
    "august" TEXT,
    "augRemarks1" TEXT,
    "augRemarks2" TEXT,
    "september" TEXT,
    "sepRemarks1" TEXT,
    "sepRemarks2" TEXT,
    "october" TEXT,
    "octRemarks1" TEXT,
    "octRemarks2" TEXT,
    "november" TEXT,
    "novRemarks1" TEXT,
    "novRemarks2" TEXT,
    "december" TEXT,
    "decRemarks1" TEXT,
    "decRemarks2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hazard2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tev2026" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "january" TEXT,
    "janRemarks1" TEXT,
    "janRemarks2" TEXT,
    "janRemarks3" TEXT,
    "february" TEXT,
    "febRemarks1" TEXT,
    "febRemarks2" TEXT,
    "march" TEXT,
    "marRemarks1" TEXT,
    "marRemarks2" TEXT,
    "april" TEXT,
    "aprRemarks1" TEXT,
    "aprRemarks2" TEXT,
    "aprilDup" TEXT,
    "aprDupRemarks1" TEXT,
    "aprDupRemarks2" TEXT,
    "may" TEXT,
    "mayRemarks1" TEXT,
    "mayRemarks2" TEXT,
    "june" TEXT,
    "junRemarks1" TEXT,
    "junRemarks2" TEXT,
    "july" TEXT,
    "julRemarks1" TEXT,
    "julRemarks2" TEXT,
    "august" TEXT,
    "augRemarks1" TEXT,
    "augRemarks2" TEXT,
    "september" TEXT,
    "sepRemarks1" TEXT,
    "sepRemarks2" TEXT,
    "october" TEXT,
    "octRemarks1" TEXT,
    "octRemarks2" TEXT,
    "november" TEXT,
    "novRemarks1" TEXT,
    "novRemarks2" TEXT,
    "december" TEXT,
    "decRemarks1" TEXT,
    "decRemarks2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tev2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoadAllowance2026" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "january" TEXT,
    "janRemark1" TEXT,
    "janRemark2" TEXT,
    "janRemark3" TEXT,
    "february" TEXT,
    "febRemark1" TEXT,
    "febRemark2" TEXT,
    "febRemark3" TEXT,
    "march" TEXT,
    "marRemark1" TEXT,
    "marRemark2" TEXT,
    "marRemark3" TEXT,
    "april" TEXT,
    "aprRemark1" TEXT,
    "aprRemark2" TEXT,
    "aprRemark3" TEXT,
    "may" TEXT,
    "mayRemark1" TEXT,
    "mayRemark2" TEXT,
    "mayRemark3" TEXT,
    "june" TEXT,
    "junRemark1" TEXT,
    "junRemark2" TEXT,
    "junRemark3" TEXT,
    "july" TEXT,
    "august" TEXT,
    "augRemarks1" TEXT,
    "augRemarks2" TEXT,
    "september" TEXT,
    "october" TEXT,
    "octRemarks1" TEXT,
    "octRemarks2" TEXT,
    "november" TEXT,
    "novRemarks1" TEXT,
    "novRemarks2" TEXT,
    "december" TEXT,
    "decRemarks1" TEXT,
    "decRemarks2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoadAllowance2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MagnaCarta2026" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "january" TEXT,
    "janRemarks1" TEXT,
    "janRemarks2" TEXT,
    "february" TEXT,
    "febRemarks1" TEXT,
    "febRemarks2" TEXT,
    "march" TEXT,
    "marRemarks1" TEXT,
    "marRemarks2" TEXT,
    "april" TEXT,
    "aprRemarks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MagnaCarta2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeaveForms" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "remarks01" TEXT,
    "remarks02" TEXT,
    "remarks03" TEXT,
    "remarks04" TEXT,
    "remarks05" TEXT,
    "remarks06" TEXT,
    "remarks07" TEXT,
    "remarks08" TEXT,
    "remarks09" TEXT,
    "remarks10" TEXT,
    "remarks11" TEXT,
    "remarks12" TEXT,
    "remarks13" TEXT,
    "remarks14" TEXT,
    "remarks15" TEXT,
    "remarks16" TEXT,
    "remarks17" TEXT,
    "remarks18" TEXT,
    "remarks19" TEXT,
    "remarks20" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LeaveForms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CvsDropdown" (
    "id" SERIAL NOT NULL,
    "documentType" TEXT,
    "yesNoValue" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CvsDropdown_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ipcrf2ndSem2025" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ipcrf2ndSem2025_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saln2026" (
    "id" SERIAL NOT NULL,
    "employeeName" TEXT,
    "employmentStatus" TEXT,
    "areaOfAssignment" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Saln2026_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcOnly" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "staffName" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "dateSubmittedJnt" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "remarks7" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcOnly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SwoiiiOnly" (
    "id" SERIAL NOT NULL,
    "drnTrackingNo" TEXT,
    "edtms" TEXT,
    "staffName" TEXT,
    "documentTitle" TEXT,
    "dateCreated" TEXT,
    "dateSubmittedJnt" TEXT,
    "remarks1" TEXT,
    "remarks2" TEXT,
    "remarks3" TEXT,
    "remarks4" TEXT,
    "remarks5" TEXT,
    "remarks6" TEXT,
    "remarks7" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SwoiiiOnly_pkey" PRIMARY KEY ("id")
);

