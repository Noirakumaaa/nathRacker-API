import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import * as XLSX from 'xlsx';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAaDocumentDto } from './dto/create-aa-document.dto.js';
import { UpdateAaDocumentDto } from './dto/update-aa-document.dto.js';
import { QueryAaDocumentsDto } from './dto/query-aa-documents.dto.js';
import { UpsertAaMonthlyDto } from './dto/upsert-aa-monthly.dto.js';
import { AA_MODULE_CATALOG } from '../aa-modules/aa-module-catalog.js';
import {
  AA_IMPORT_DEFINITIONS_BY_CODE,
  AA_IMPORT_DEFINITIONS_BY_SHEET_NAME,
  type AaImportDefinition,
} from './aa-import-definitions.js';

@Injectable()
export class AaDocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  private syncPromise: Promise<void> | null = null;

  private async ensureCatalogSynced() {
    if (!this.syncPromise) {
      this.syncPromise = (async () => {
        for (const mod of AA_MODULE_CATALOG) {
          await this.prisma.client.aaDocumentModule.upsert({
            where: { code: mod.code },
            update: {
              name: mod.name,
              prefix: mod.prefix,
              description: mod.description,
              isActive: true,
              colStaff: mod.colStaff ?? null,
              colSubject: mod.colSubject ?? null,
              colActivity: mod.colActivity ?? null,
            },
            create: {
              ...mod,
              isActive: true,
              colStaff: mod.colStaff ?? null,
              colSubject: mod.colSubject ?? null,
              colActivity: mod.colActivity ?? null,
            },
          });
        }
      })().finally(() => {
        this.syncPromise = null;
      });
    }

    await this.syncPromise;
  }

  private async findModuleOrThrow(moduleCode: string) {
    await this.ensureCatalogSynced();

    const mod = await this.prisma.client.aaDocumentModule.findUnique({
      where: { code: moduleCode.toUpperCase() },
    });

    if (!mod) {
      throw new NotFoundException(`Module "${moduleCode}" not found.`);
    }

    return mod;
  }

  /**
   * Create a new document for the given module.
   * Uses Serializable isolation to prevent duplicate sequence numbers
   * under concurrent inserts.
   */
  async create(moduleCode: string, dto: CreateAaDocumentDto) {
    return this.prisma.client.$transaction(
      async (tx) => {
        const mod = await this.findModuleOrThrow(moduleCode);
        if (!mod.isActive) {
          throw new BadRequestException(`Module "${moduleCode}" is inactive.`);
        }

        const docYear = dto.year ?? new Date().getFullYear();

        const last = await tx.aaDocument.findFirst({
          where: { moduleId: mod.id, year: docYear },
          orderBy: { sequence: 'desc' },
          select: { sequence: true },
        });

        const sequence = (last?.sequence ?? 0) + 1;
        const trackingNo = `${mod.prefix}-${String(sequence).padStart(4, '0')}`;

        return tx.aaDocument.create({
          data: {
            trackingNo,
            sequence,
            staffName: dto.staffName,
            subject: dto.subject,
            operationNum: dto.operationNum ?? null,
            year: docYear,
            dateCreated: new Date(dto.dateCreated),
            dateSubmittedJnt: dto.dateSubmittedJnt ? new Date(dto.dateSubmittedJnt) : null,
            oo8Level: dto.oo8Level ?? null,
            moduleId: mod.id,
          },
          include: {
            remarks: { orderBy: { order: 'asc' } },
            module: true,
          },
        });
      },
      // Prevent duplicate sequences under concurrent inserts
      { isolationLevel: 'Serializable' },
    );
  }

  /** Paginated document list for a module with search and filters */
  async findByModule(moduleCode: string, query: QueryAaDocumentsDto) {
    const mod = await this.findModuleOrThrow(moduleCode);

    const {
      page,
      pageSize,
      search,
      staffName,
      year,
      dateFrom,
      dateTo,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = query;

    const where = {
      moduleId: mod.id,
      ...(year !== undefined && { year }),
      ...(staffName && {
        staffName: { contains: staffName, mode: 'insensitive' as const },
      }),
      ...(search && {
        OR: [
          { trackingNo: { contains: search, mode: 'insensitive' as const } },
          { staffName: { contains: search, mode: 'insensitive' as const } },
          { subject: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
      ...(dateFrom || dateTo
        ? {
            dateCreated: {
              ...(dateFrom && { gte: new Date(dateFrom) }),
              ...(dateTo && { lte: new Date(dateTo) }),
            },
          }
        : {}),
    };

    const [total, data] = await Promise.all([
      this.prisma.client.aaDocument.count({ where }),
      this.prisma.client.aaDocument.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          remarks: { orderBy: { order: 'asc' } },
        },
      }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      },
    };
  }

  /** Check whether a tracking number exists in the AA system (any year) */
  async checkTrackingNo(trackingNo: string): Promise<{ exists: boolean }> {
    const doc = await this.prisma.client.aaDocument.findFirst({
      where: { trackingNo: trackingNo.toUpperCase() },
      select: { id: true },
    });
    return { exists: doc !== null };
  }

  /** Single document with all remarks (and monthlyData if present) */
  async findOne(id: string) {
    const doc = await this.prisma.client.aaDocument.findUnique({
      where: { id },
      include: {
        module: true,
        remarks: { orderBy: { order: 'asc' } },
        monthlyData: true,
      },
    });

    if (!doc) throw new NotFoundException(`Document "${id}" not found.`);
    return doc;
  }

  async update(id: string, dto: UpdateAaDocumentDto) {
    await this.findOne(id); // throws if not found

    return this.prisma.client.aaDocument.update({
      where: { id },
      data: {
        ...(dto.staffName !== undefined && { staffName: dto.staffName }),
        ...(dto.subject !== undefined && { subject: dto.subject }),
        ...(dto.operationNum !== undefined && { operationNum: dto.operationNum || null }),
        ...(dto.year !== undefined && { year: dto.year }),
        ...(dto.dateCreated !== undefined && {
          dateCreated: new Date(dto.dateCreated),
        }),
        ...(dto.dateSubmittedJnt !== undefined && {
          dateSubmittedJnt: dto.dateSubmittedJnt ? new Date(dto.dateSubmittedJnt) : null,
        }),
        ...(dto.oo8Level !== undefined && { oo8Level: dto.oo8Level || null }),
      },
      include: {
        module: true,
        remarks: { orderBy: { order: 'asc' } },
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // throws if not found
    // Cascade delete removes all remarks automatically (onDelete: Cascade)
    return this.prisma.client.aaDocument.delete({ where: { id } });
  }

  /**
   * Export all documents for a module to an XLSX buffer.
   * When raw AA import rows exist, export them back using sheet-specific
   * headers/columns instead of the generic tracking projection.
   */
  async exportToXlsx(moduleCode: string): Promise<Buffer> {
    const mod = await this.findModuleOrThrow(moduleCode);
    const definition = AA_IMPORT_DEFINITIONS_BY_CODE.get(
      moduleCode.toUpperCase(),
    );

    if (definition) {
      const rawRows = await this.findRawModuleRows(definition);
      if (rawRows.length > 0) {
        const worksheet = XLSX.utils.aoa_to_sheet([
          this.buildExportHeaderRow(definition),
          ...rawRows.map((row) => this.buildExportDataRow(definition, row)),
        ]);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(
          workbook,
          worksheet,
          definition.sheetNames[0].slice(0, 31),
        );

        return XLSX.write(workbook, {
          type: 'buffer',
          bookType: 'xlsx',
        }) as Buffer;
      }
    }

    const documents = await this.prisma.client.aaDocument.findMany({
      where: { moduleId: mod.id },
      orderBy: { sequence: 'asc' },
      include: { remarks: { orderBy: { order: 'asc' } } },
    });

    // Find maximum remark count to determine column width
    const maxRemarks = documents.reduce(
      (max, doc) => Math.max(max, doc.remarks.length),
      0,
    );

    const remarkHeaders = Array.from(
      { length: maxRemarks },
      (_, i) => `Remarks/Date ${i + 1}`,
    );

    const headers = [
      'DRN/Tracking No',
      'Name of Staff',
      'Subject',
      'Date Created',
      ...remarkHeaders,
    ];

    const rows = documents.map((doc) => {
      const base = [
        doc.trackingNo,
        doc.staffName,
        doc.subject,
        doc.dateCreated.toLocaleDateString('en-PH', {
          timeZone: 'Asia/Manila',
        }),
      ];

      const remarkCells = remarkHeaders.map((_, i) => {
        const remark = doc.remarks[i];
        if (!remark) return '';
        const date = remark.remarkDate
          ? ` ${remark.remarkDate.toLocaleDateString('en-PH', { timeZone: 'Asia/Manila' })}`
          : '';
        return `${remark.content}${date}`;
      });

      return [...base, ...remarkCells];
    });

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, mod.code);

    return XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' }) as Buffer;
  }

  /**
   * Import documents from an xlsx buffer.
   * Each module uses its own raw schema model so imports can preserve the
   * original worksheet headers, while also projecting into the AA tracking list.
   */
  async importFromXlsx(moduleCode: string, buffer: Buffer, sheetName?: string, year?: number) {
    const definition = AA_IMPORT_DEFINITIONS_BY_CODE.get(
      moduleCode.toUpperCase(),
    );
    if (!definition) {
      throw new BadRequestException(
        `No import definition is configured for module "${moduleCode}".`,
      );
    }

    let workbook: XLSX.WorkBook;
    try {
      workbook = XLSX.read(buffer, { type: 'buffer', cellDates: true });
    } catch (err) {
      throw new BadRequestException(
        `Workbook import failed for ${moduleCode.toUpperCase()}. Please upload a valid AA workbook and try again.`,
      );
    }

    const targetSheet = this.resolveTargetSheetName(
      workbook,
      definition,
      sheetName,
    );
    if (!targetSheet) {
      throw new BadRequestException(
        `We couldn't find a matching sheet for ${moduleCode.toUpperCase()} in this workbook.`,
      );
    }

    let parsed: ReturnType<typeof this.parseSheetRows>;
    try {
      parsed = this.parseSheetRows(definition, workbook.Sheets[targetSheet]);
    } catch (err) {
      throw new BadRequestException(
        `Workbook import failed for ${moduleCode.toUpperCase()}. Please check that the selected sheet matches the expected AA module layout and try again.`,
      );
    }
    const mod = await this.findModuleOrThrow(moduleCode);
    if (parsed.length === 0) {
      throw new BadRequestException(
        `No importable rows were found for ${mod.name}. Please check that the selected sheet contains data under the expected headers.`,
      );
    }

    let result: { imported: number; skipped: number };
    try {
      result = await this.persistParsedRows(
        moduleCode,
        definition,
        parsed,
        year,
      );
    } catch (err) {
      throw new BadRequestException(
        `Workbook import failed for ${moduleCode.toUpperCase()}. Please verify the workbook content and try again.`,
      );
    }

    return {
      imported: result.imported,
      skipped: result.skipped,
      sheet: targetSheet,
      moduleCode: moduleCode.toUpperCase(),
    };
  }

  async importWorkbook(buffer: Buffer, year?: number) {
    let workbook: XLSX.WorkBook;
    try {
      workbook = XLSX.read(buffer, { type: 'buffer', cellDates: true });
    } catch (err) {
      throw new BadRequestException(
        'Workbook import failed. Please upload a valid AA workbook and try again.',
      );
    }

    if (workbook.SheetNames.length === 0) {
      throw new BadRequestException(
        'This file appears to have no sheets. Please check that it is a valid Excel file.',
      );
    }

    const importedModules: Array<{
      moduleCode: string;
      sheet: string;
      imported: number;
      skipped: number;
    }> = [];
    const skippedSheets: Array<{
      moduleCode: string;
      sheet: string;
      reason: string;
    }> = [];
    const unmatchedSheets: string[] = [];

    for (const sheetName of workbook.SheetNames) {
      const definition = this.findDefinitionBySheetName(sheetName);
      if (!definition) {
        unmatchedSheets.push(sheetName);
        continue;
      }

      let parsed: ReturnType<typeof this.parseSheetRows>;
      try {
        parsed = this.parseSheetRows(definition, workbook.Sheets[sheetName]);
      } catch (err) {
        skippedSheets.push({
          moduleCode: definition.code,
          sheet: sheetName,
          reason:
            'Workbook import failed for this sheet. Please verify the worksheet format and try again.',
        });
        continue;
      }

      if (parsed.length === 0) {
        const allRows = XLSX.utils.sheet_to_json<unknown[]>(workbook.Sheets[sheetName], {
          header: 1,
          defval: '',
          raw: false,
        });
        const totalRaw = Math.max(0, allRows.length - definition.dataStartRow);
        const requiredDesc = definition.requiredAll
          ? `all of: ${definition.requiredAll.join(', ')}`
          : `at least ${definition.requiredAnyCount ?? 1} of: ${(definition.requiredAny ?? []).join(', ')}`;
        const reason = totalRaw === 0
          ? `Sheet appears to be empty (no rows after header).`
          : `${totalRaw} row(s) scanned but none passed validation. Required fields: ${requiredDesc}.`;
        console.warn(`[AA Import] Zero rows for sheet "${sheetName}" (${definition.code}): ${reason}`);
        skippedSheets.push({ moduleCode: definition.code, sheet: sheetName, reason });
        continue;
      }

      try {
        const result = await this.persistParsedRows(
          definition.code,
          definition,
          parsed,
          year,
        );
        importedModules.push({
          moduleCode: definition.code,
          sheet: sheetName,
          imported: result.imported,
          skipped: result.skipped,
        });
      } catch (err) {
        const errMsg = err instanceof Error ? err.message : String(err);
        const isTimeout = errMsg.includes('expired transaction') || errMsg.includes('timeout');
        const reason = isTimeout
          ? `Transaction timed out — too many rows to insert at once (${parsed.length} rows). Try splitting the sheet into smaller imports.`
          : `Failed while saving rows: ${errMsg.slice(0, 200)}`;
        console.error(`[AA Import] Failed to persist sheet "${sheetName}" (${definition.code}):`, err);
        skippedSheets.push({ moduleCode: definition.code, sheet: sheetName, reason });
      }
    }

    if (importedModules.length === 0) {
      throw new BadRequestException(
        unmatchedSheets.length > 0
          ? 'No supported AA sheets were found in the workbook. Please upload a workbook containing valid AA module sheets.'
          : 'No supported AA sheets contained importable data. Please verify that your workbook contains valid AA module rows.',
      );
    }

    return {
      imported: importedModules.reduce((sum, item) => sum + item.imported, 0),
      skipped: importedModules.reduce((sum, item) => sum + item.skipped, 0),
      importedModules,
      skippedSheets,
      unmatchedSheets,
    };
  }

  private resolveTargetSheetName(
    workbook: XLSX.WorkBook,
    definition: AaImportDefinition,
    preferredSheetName?: string,
  ) {
    if (preferredSheetName) {
      return workbook.SheetNames.find(
        (sheetName) =>
          this.normalizeSheetName(sheetName) ===
          this.normalizeSheetName(preferredSheetName),
      );
    }

    return (
      workbook.SheetNames.find(
        (sheetName) =>
          this.findDefinitionBySheetName(sheetName)?.code === definition.code,
      ) ?? workbook.SheetNames[0]
    );
  }

  private parseSheetRows(
    definition: AaImportDefinition,
    sheet: XLSX.WorkSheet,
  ) {
    const allRows = XLSX.utils.sheet_to_json<unknown[]>(sheet, {
      header: 1,
      defval: '',
      raw: true,
    });
    const useLegacyLoad26Layout = this.isLegacyLoad26Layout(
      definition,
      allRows,
    );

    return allRows
      .slice(definition.dataStartRow)
      .map((rowRaw) => {
        const row = rowRaw;
        const rawData = useLegacyLoad26Layout
          ? this.parseLegacyLoad26RawData(definition, row)
          : definition.fields.reduce<Record<string, string | undefined>>(
              (accumulator, field) => {
                const columnDefinition = definition.columns.find(
                  (definitionField) => definitionField.field === field,
                );
                const cellValue = this.readJoinedCellValue(
                  row,
                  columnDefinition?.indexes ?? [],
                );
                accumulator[field] = cellValue || undefined;
                return accumulator;
              },
              {},
            );
        this.normalizeModuleRawData(definition.code, rawData);

        if (!this.shouldImportRow(definition, rawData)) return null;

        const staffName = rawData[definition.projection.staffField] ?? '';
        const subject = definition.projection.subjectFields
          .map((field) => rawData[field] ?? '')
          .filter(Boolean)
          .join(' · ');
        const dateCreated = this.parseModuleDate(
          row,
          definition.columns.find(
            (definitionField) =>
              definitionField.field === definition.projection.dateField,
          )?.indexes ?? [],
        );
        const remarks = definition.fields
          .filter(
            (field) =>
              field.toLowerCase().includes('remarks') || field === 'remarks',
          )
          .map((field) => rawData[field] ?? '')
          .filter(Boolean);

        const dateSubmittedJntIndexes =
          definition.columns.find((col) => col.field === 'dateSubmittedJnt')
            ?.indexes ?? [];
        const dateSubmittedJnt =
          dateSubmittedJntIndexes.length > 0
            ? this.parseOptionalDate(row, dateSubmittedJntIndexes)
            : null;

        return { rawData, staffName, subject, dateCreated, dateSubmittedJnt, remarks };
      })
      .filter(
        (
          row,
        ): row is {
          rawData: Record<string, string | undefined>;
          staffName: string;
          subject: string;
          dateCreated: Date;
          dateSubmittedJnt: Date | null;
          remarks: string[];
        } => row !== null,
      );
  }

  private isLegacyLoad26Layout(
    definition: AaImportDefinition,
    allRows: unknown[][],
  ) {
    if (definition.code !== 'LOAD') return false;

    const headerRow = allRows[0] ?? [];
    return headerRow.length > 0 && headerRow.length <= 45;
  }

  private parseLegacyLoad26RawData(
    definition: AaImportDefinition,
    row: unknown[],
  ) {
    const rawData = definition.fields.reduce<
      Record<string, string | undefined>
    >((accumulator, field) => {
      accumulator[field] = undefined;
      return accumulator;
    }, {});
    const legacyColumns: Array<{ field: string; index: number }> = [
      { field: 'employeeName', index: 0 },
      { field: 'employmentStatus', index: 1 },
      { field: 'areaOfAssignment', index: 2 },
      { field: 'january', index: 3 },
      { field: 'janRemark1', index: 4 },
      { field: 'janRemark2', index: 5 },
      { field: 'janRemark3', index: 6 },
      { field: 'february', index: 7 },
      { field: 'febRemark1', index: 8 },
      { field: 'febRemark2', index: 9 },
      { field: 'febRemark3', index: 10 },
      { field: 'march', index: 11 },
      { field: 'marRemark1', index: 12 },
      { field: 'marRemark2', index: 13 },
      { field: 'marRemark3', index: 14 },
      { field: 'april', index: 15 },
      { field: 'aprRemark1', index: 16 },
      { field: 'aprRemark2', index: 17 },
      { field: 'aprRemark3', index: 18 },
      { field: 'may', index: 19 },
      { field: 'mayRemark1', index: 20 },
      { field: 'mayRemark2', index: 21 },
      { field: 'mayRemark3', index: 22 },
      { field: 'june', index: 23 },
      { field: 'junRemark1', index: 24 },
      { field: 'junRemark2', index: 25 },
      { field: 'junRemark3', index: 26 },
      { field: 'july', index: 27 },
      { field: 'august', index: 30 },
      { field: 'augRemarks1', index: 31 },
      { field: 'augRemarks2', index: 32 },
      { field: 'september', index: 33 },
      { field: 'october', index: 36 },
      { field: 'octRemarks1', index: 37 },
      { field: 'octRemarks2', index: 38 },
      { field: 'november', index: 39 },
      { field: 'novRemarks1', index: 40 },
      { field: 'novRemarks2', index: 41 },
      { field: 'december', index: 42 },
      { field: 'decRemarks1', index: 43 },
      { field: 'decRemarks2', index: 44 },
    ];

    for (const { field, index } of legacyColumns) {
      const cellValue = this.readJoinedCellValue(row, [index]);
      rawData[field] = cellValue || undefined;
    }

    return rawData;
  }

  private async persistParsedRows(
    moduleCode: string,
    definition: AaImportDefinition,
    parsed: Array<{
      rawData: Record<string, string | undefined>;
      staffName: string;
      subject: string;
      dateCreated: Date;
      dateSubmittedJnt: Date | null;
      remarks: string[];
    }>,
    overrideYear?: number,
  ): Promise<{ imported: number; skipped: number }> {
    const mod = await this.prisma.client.aaDocumentModule.findUnique({
      where: { code: moduleCode.toUpperCase() },
    });
    if (!mod) throw new NotFoundException(`Module "${moduleCode}" not found.`);

    // Resolve year for every row upfront
    const rowsWithYear = parsed.map((row) => ({
      ...row,
      year: overrideYear ?? row.dateCreated.getFullYear(),
      staffName: row.staffName || 'N/A',
      subject: row.subject || 'Imported record',
    }));

    // Single batch query — fetch all existing staffName+subject+year combos for this module
    const uniqueYears = [...new Set(rowsWithYear.map((r) => r.year))];
    const existing = await this.prisma.client.aaDocument.findMany({
      where: { moduleId: mod.id, year: { in: uniqueYears } },
      select: { staffName: true, subject: true, year: true },
    });
    const existingSet = new Set(
      existing.map((d) => `${d.year}|${d.staffName}|${d.subject}`),
    );

    const toInsert = rowsWithYear.filter(
      (row) => !existingSet.has(`${row.year}|${row.staffName}|${row.subject}`),
    );
    const skipped = parsed.length - toInsert.length;

    if (toInsert.length === 0) return { imported: 0, skipped };

    await this.prisma.client.$transaction(
      async (tx) => {
        // Build a per-year sequence map from existing data
        const seqByYear = new Map<number, number>();
        const yearNextSeq = async (year: number): Promise<number> => {
          if (!seqByYear.has(year)) {
            const last = await tx.aaDocument.findFirst({
              where: { moduleId: mod.id, year },
              orderBy: { sequence: 'desc' },
              select: { sequence: true },
            });
            seqByYear.set(year, (last?.sequence ?? 0) + 1);
          }
          const next = seqByYear.get(year)!;
          seqByYear.set(year, next + 1);
          return next;
        };

        const rawModuleClient = tx as unknown as Record<
          string,
          {
            create: (args: {
              data: Record<string, string | undefined>;
            }) => Promise<unknown>;
          }
        >;

        for (const row of toInsert) {
          const seq = await yearNextSeq(row.year);
          const trackingNo = `${mod.prefix}-${String(seq).padStart(4, '0')}`;
          const doc = await tx.aaDocument.create({
            data: {
              trackingNo,
              sequence: seq,
              staffName: row.staffName,
              subject: row.subject,
              year: row.year,
              dateCreated: row.dateCreated,
              dateSubmittedJnt: row.dateSubmittedJnt ?? null,
              moduleId: mod.id,
            },
          });

          if (row.remarks.length > 0) {
            await tx.aaRemark.createMany({
              data: row.remarks.map((content, i) => ({
                documentId: doc.id,
                content,
                order: i + 1,
                remarkDate: null,
              })),
            });
          }

          if (definition.delegate === 'aaMonthlyData') {
            const monthlyData = Object.fromEntries(
              Object.entries(row.rawData).filter(([, value]) => value !== undefined),
            );
            await tx.aaMonthlyData.create({
              data: { documentId: doc.id, data: monthlyData },
            });
          } else {
            await this.createRawModuleRecord(
              rawModuleClient,
              definition.delegate,
              row.rawData,
            );
          }
        }
      },
      { isolationLevel: 'Serializable', timeout: 120_000 },
    );

    return { imported: toInsert.length, skipped };
  }

  private normalizeSheetName(sheetName: string) {
    return sheetName
      .trim()
      .replace(/\s+/g, ' ')
      .toUpperCase()
      .replace(/\s*(19|20)\d{2}\b/g, '')
      .trim();
  }

  private findDefinitionBySheetName(sheetName: string) {
    return AA_IMPORT_DEFINITIONS_BY_SHEET_NAME.get(
      this.normalizeSheetName(sheetName),
    );
  }

  private readJoinedCellValue(row: unknown[], indexes: number[]) {
    return indexes
      .map((index) => this.formatRawCellValue(row[index]))
      .filter(Boolean)
      .join(' ')
      .trim();
  }

  private formatRawCellValue(value: unknown) {
    if (value === null || value === undefined) return '';
    if (value instanceof Date) {
      return value.toISOString();
    }
    return this.stringifyCellValue(value).trim();
  }

  private async findRawModuleRows(definition: AaImportDefinition) {
    const rawClient = this.prisma.client as unknown as Record<
      string,
      {
        findMany: (args?: {
          orderBy?: Record<string, 'asc' | 'desc'>;
        }) => Promise<Record<string, unknown>[]>;
      }
    >;

    const delegate = rawClient[definition.delegate];
    if (!delegate?.findMany) return [];

    const rows = await delegate.findMany({ orderBy: { id: 'asc' } });
    return rows.map((row) => {
      if (
        row &&
        typeof row === 'object' &&
        !Array.isArray(row) &&
        'data' in row &&
        row.data &&
        typeof row.data === 'object' &&
        !Array.isArray(row.data)
      ) {
        return { ...row, ...(row.data as Record<string, unknown>) };
      }
      return row;
    });
  }

  private buildExportHeaderRow(definition: AaImportDefinition) {
    const maxIndex = Math.max(
      ...definition.columns.flatMap(
        (columnDefinition) => columnDefinition.indexes,
      ),
    );
    const row = Array.from({ length: maxIndex + 1 }, () => '');

    for (const columnDefinition of definition.columns) {
      const index = columnDefinition.indexes[0];
      row[index] = this.getExportHeaderLabel(
        definition.code,
        columnDefinition.field,
      );
    }

    return row;
  }

  private buildExportDataRow(
    definition: AaImportDefinition,
    rawRow: Record<string, unknown>,
  ) {
    const maxIndex = Math.max(
      ...definition.columns.flatMap(
        (columnDefinition) => columnDefinition.indexes,
      ),
    );
    const row = Array.from({ length: maxIndex + 1 }, () => '');

    for (const columnDefinition of definition.columns) {
      const index = columnDefinition.indexes[0];
      row[index] = this.formatExportCell(rawRow[columnDefinition.field]);
    }

    return row;
  }

  private formatExportCell(value: unknown) {
    if (value === null || value === undefined) return '';
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    return this.stringifyCellValue(value);
  }

  private stringifyCellValue(value: unknown) {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean' ||
      typeof value === 'bigint'
    ) {
      return String(value);
    }

    return JSON.stringify(value);
  }

  private getExportHeaderLabel(moduleCode: string, field: string) {
    const monthLabelMap: Record<string, string> = {
      january: 'JANUARY',
      february: 'FEBRUARY',
      march: 'MARCH',
      april: 'APRIL',
      aprilDup: 'APRIL',
      may: 'MAY',
      june: 'JUNE',
      july: 'JULY',
      august: 'AUGUST',
      september: 'SEPTEMBER',
      october: 'OCTOBER',
      november: 'NOVEMBER',
      december: 'DECEMBER',
      december2025: 'DECEMBER 2025',
    };

    if (field in monthLabelMap) {
      return monthLabelMap[field];
    }

    if (field.startsWith('coveredDates')) {
      return 'COVERED DATES/ REMARKS';
    }

    if (/remarks/i.test(field) || /remark/i.test(field)) {
      if (moduleCode === 'COAWTR') return 'Remarks/Date(M&E)';
      if (moduleCode === 'LOAD') return 'Remark';
      if (['MAGNA', 'IPCRF', 'SALN'].includes(moduleCode)) {
        return 'REMARKS';
      }
      if (moduleCode === 'MRBTOF' && field === 'remarks') return 'REMARKS';
      return 'Remarks/Date';
    }

    const labelMap: Record<string, string> = {
      number: 'NUMBER',
      employeeName: 'NAME OF EMPLOYEE',
      areaOfAssignment: 'AREA OF ASSIGNMENT',
      drnTrackingNo: 'DRN/Tracking No',
      edtmsNumber: 'EDTMS NUMBER',
      edtms: 'EDTMS',
      staffRequesting: 'STAFF REQUESTING',
      staffName:
        moduleCode === 'CVS'
          ? 'Name of the Staff'
          : moduleCode === 'BDM'
            ? 'NAME OF STAFF'
            : 'Name of Staff',
      subject: 'SUBJECT',
      documentTitle: 'Title of Documents',
      dateCreated: 'Date Created',
      uploadedBy: 'UPLOADED BY',
      uploadDate: 'DATE',
      dateForwarded: 'DATE FORWARDED',
      dateSubmitted: 'Date Submitted',
      dateSubmittedJnt: 'Date Submitted to JNT',
      referredToGrsRpmo: 'Referred to GRS/RPMO',
      activityDocumentation: 'ACTIVITY DOCUMENTATION',
      fromParty: 'FROM',
      addressedTo: 'ADDRESSED TO',
      dateForwardedToMrb: 'DATE FORWARDED TO MRB',
      assignedCitylink: 'ASSIGNED CITYLINK',
      mrbInCharge: 'MRB IN-CHARGE',
      tofNumber: 'TOF NUMBER',
      requestTitle: 'TITLE OF REQUEST',
      dateForwardedToCgu: 'DATE FORWARDED TO CGU',
      documentType: moduleCode === 'CVSDD' ? 'ENDORSEMENT' : 'DOCUMENT TYPE',
      yesNoValue: moduleCode === 'CVSDD' ? 'YES' : 'YES / NO',
      storyType: 'TYPE OF SUCCESS STORY',
      dateUploadedDrive: 'Date uploaded to drive',
      googleLinkFolder: 'GOOGLE LINK (FOLDER)',
      kwentoPangarap: 'KWENTO NG PANGARAP (ASPIRATION)',
      kwentoPagtataya: 'KWENTO NG PAGTATAYA (PARTICIPATION)',
      kwentoPagtataguyod: 'KWENTO NG PAGTATAGUYOD (SUSTAINABILITY)',
      kwentoPagbabago: 'KWENTO NG PAGBABAGO (TRANSFORMATION)',
      ooLevelDrnNumber: 'OO LEVEL DRN NUMBER',
      lrn: 'LRN',
      pcn: 'PCN',
    };

    if (field === 'employmentStatus') {
      return ['COCOT', 'DTR', 'LOAD'].includes(moduleCode)
        ? 'EMPLOYEE STATUS'
        : 'STATUS OF EMPLOYMENT';
    }

    return labelMap[field] ?? field;
  }

  private shouldImportRow(
    definition: AaImportDefinition,
    rawData: Record<string, string | undefined>,
  ) {
    const values = Object.values(rawData).filter(Boolean);
    if (values.length === 0) return false;

    if (definition.requiredAll?.some((field) => !rawData[field]?.trim())) {
      return false;
    }

    if (definition.requiredAny && definition.requiredAny.length > 0) {
      const presentCount = definition.requiredAny.filter((field) =>
        rawData[field]?.trim(),
      ).length;
      const threshold = definition.requiredAnyCount ?? 1;
      if (presentCount < threshold) {
        return false;
      }
    }

    return true;
  }

  private parseOptionalDate(row: unknown[], indexes: number[]): Date | null {
    const rawValue = indexes
      .map((index) => row[index])
      .find(
        (value) =>
          value !== undefined &&
          value !== null &&
          this.stringifyCellValue(value).trim() !== '',
      );

    if (!rawValue) return null;

    if (rawValue instanceof Date) return rawValue;

    if (typeof rawValue === 'number' && rawValue > 0) {
      const excelEpoch = new Date(1899, 11, 30);
      const candidate = new Date(excelEpoch.getTime() + rawValue * 86400000);
      if (!Number.isNaN(candidate.getTime())) return candidate;
    }

    const normalizedDate = this.stringifyCellValue(rawValue)
      .replace(/jnuary/gi, 'January')
      .replace(/febuary/gi, 'February')
      .replace(/arpril/gi, 'April');

    const parsed = new Date(normalizedDate);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }

  private parseModuleDate(row: unknown[], indexes: number[]) {
    const rawValue = indexes
      .map((index) => row[index])
      .find(
        (value) =>
          value !== undefined &&
          value !== null &&
          this.stringifyCellValue(value).trim() !== '',
      );

    if (!rawValue) return new Date();

    if (rawValue instanceof Date) {
      return rawValue;
    }

    if (typeof rawValue === 'number' && rawValue > 0) {
      // Convert Excel serial date to JS Date (Dec 30 1899 epoch, accounts for Excel leap year bug)
      const excelEpoch = new Date(1899, 11, 30);
      const candidate = new Date(excelEpoch.getTime() + rawValue * 86400000);
      if (!Number.isNaN(candidate.getTime())) return candidate;
    }

    const normalizedDate = this.stringifyCellValue(rawValue)
      .replace(/jnuary/gi, 'January')
      .replace(/febuary/gi, 'February')
      .replace(/arpril/gi, 'April');

    const parsed = new Date(normalizedDate);
    return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
  }

  private normalizeModuleRawData(
    moduleCode: string,
    rawData: Record<string, string | undefined>,
  ) {
    if (moduleCode !== 'SUCCESS') return;

    const storyTypeFromTitle = this.inferSuccessStoryType(
      rawData.documentTitle,
    );
    const storyType = rawData.storyType?.trim() || storyTypeFromTitle;
    rawData.storyType = storyType || undefined;

    rawData.googleLinkFolder = this.getFirstDistinctValue(
      rawData.googleLinkFolder,
      rawData.kwentoPangarap,
      rawData.kwentoPagtataya,
      rawData.kwentoPagtataguyod,
      rawData.kwentoPagbabago,
    );

    if (
      storyType === 'KWENTO NG PANGARAP' &&
      rawData.googleLinkFolder &&
      !rawData.kwentoPangarap
    ) {
      rawData.kwentoPangarap = rawData.googleLinkFolder;
    }
    if (
      storyType === 'KWENTO NG PAGTATAYA' &&
      rawData.googleLinkFolder &&
      !rawData.kwentoPagtataya
    ) {
      rawData.kwentoPagtataya = rawData.googleLinkFolder;
    }
    if (
      storyType === 'KWENTO NG PAGTATAGUYOD' &&
      rawData.googleLinkFolder &&
      !rawData.kwentoPagtataguyod
    ) {
      rawData.kwentoPagtataguyod = rawData.googleLinkFolder;
    }
    if (
      storyType === 'KWENTO NG PAGBABAGO' &&
      rawData.googleLinkFolder &&
      !rawData.kwentoPagbabago
    ) {
      rawData.kwentoPagbabago = rawData.googleLinkFolder;
    }
  }

  private inferSuccessStoryType(documentTitle?: string) {
    const title = documentTitle?.toUpperCase() ?? '';
    if (title.includes('PANGARAP')) return 'KWENTO NG PANGARAP';
    if (title.includes('PAGTATAYA')) return 'KWENTO NG PAGTATAYA';
    if (title.includes('PAGTATAGUYOD')) return 'KWENTO NG PAGTATAGUYOD';
    if (title.includes('PAGBABAGO')) return 'KWENTO NG PAGBABAGO';
    return '';
  }

  private getFirstDistinctValue(...values: Array<string | undefined>) {
    const distinctValues = [
      ...new Set(values.map((value) => value?.trim()).filter(Boolean)),
    ];
    return distinctValues[0];
  }

  private createRawModuleRecord(
    rawModuleClient: Record<
      string,
      {
        create: (args: {
          data: Record<string, string | undefined>;
        }) => Promise<unknown>;
      }
    >,
    delegate: string,
    rawData: Record<string, string | undefined>,
  ) {
    if (!rawModuleClient[delegate]) {
      throw new BadRequestException(
        `The import target "${delegate}" is not available in Prisma.`,
      );
    }
    return rawModuleClient[delegate].create({ data: rawData });
  }

  // ─── Generic Monthly Grid (COAWTR / HAZARD / TEV / MAGNA / LOAD) ─

  /** Fields allowed per raw-model delegate (keeps Prisma from rejecting unknown keys) */
  private static readonly MONTHLY_FIELDS: Record<string, string[]> = {
    COAWTR: [
      'january','janRemarksMe1','janRemarksMe2',
      'february','febRemarksMe',
      'march','marRemarksMe',
      'april','aprRemarksMe',
      'may','mayRemarksMe',
      'june','junRemarksMe',
      'july','julRemarksMe',
    ],
    HAZARD: [
      'january','janRemarks1','janRemarks2',
      'february','febRemarks1','febRemarks2',
      'march','marRemarks1','marRemarks2',
      'april','aprRemarks1','aprRemarks2',
      'may','mayRemarks1','mayRemarks2',
      'june','junRemarks1','junRemarks2',
      'july','julRemarks1','julRemarks2',
      'august','augRemarks1','augRemarks2',
      'september','sepRemarks1','sepRemarks2',
      'october','octRemarks1','octRemarks2',
      'november','novRemarks1','novRemarks2',
      'december','decRemarks1','decRemarks2',
    ],
    TEV: [
      'january','janRemarks1','janRemarks2','janRemarks3',
      'february','febRemarks1','febRemarks2',
      'march','marRemarks1','marRemarks2',
      'april','aprRemarks1','aprRemarks2',
      'aprilDup','aprDupRemarks1','aprDupRemarks2',
      'may','mayRemarks1','mayRemarks2',
      'june','junRemarks1','junRemarks2',
      'july','julRemarks1','julRemarks2',
      'august','augRemarks1','augRemarks2',
      'september','sepRemarks1','sepRemarks2',
      'october','octRemarks1','octRemarks2',
      'november','novRemarks1','novRemarks2',
      'december','decRemarks1','decRemarks2',
    ],
    MAGNA: [
      'january','janRemarks1','janRemarks2',
      'february','febRemarks1','febRemarks2',
      'march','marRemarks1','marRemarks2',
      'april','aprRemarks',
    ],
    LOAD: [
      'january','janRemark1','janRemark2','janRemark3','janRemark4','janRemark5',
      'february','febRemark1','febRemark2','febRemark3','febRemark4','febRemark5',
      'march','marRemark1','marRemark2','marRemark3','marRemark4','marRemark5',
      'april','aprRemark1','aprRemark2','aprRemark3','aprRemark4','aprRemark5',
      'may','mayRemark1','mayRemark2','mayRemark3','mayRemark4','mayRemark5',
      'june','junRemark1','junRemark2','junRemark3','junRemark4','junRemark5',
      'july','julRemarks1','julRemarks2','julRemarks3','julRemarks4','julRemarks5',
      'august','augRemarks1','augRemarks2','augRemarks3','augRemarks4','augRemarks5',
      'september','sepRemarks1','sepRemarks2','sepRemarks3','sepRemarks4','sepRemarks5',
      'october','octRemarks1','octRemarks2','octRemarks3','octRemarks4','octRemarks5',
      'november','novRemarks1','novRemarks2','novRemarks3','novRemarks4','novRemarks5',
      'december','decRemarks1','decRemarks2','decRemarks3','decRemarks4','decRemarks5',
    ],
  };

  async getMonthly(documentId: string) {
    const doc = await this.findOne(documentId);
    if (!doc.module?.isMonthly) return null;

    return this.prisma.client.aaMonthlyData.findUnique({
      where: { documentId },
    });
  }

  async upsertMonthly(documentId: string, body: Record<string, unknown>) {
    const doc = await this.findOne(documentId);
    if (!doc.module?.isMonthly) {
      throw new BadRequestException(
        `Module "${doc.module?.code}" does not have a monthly grid.`,
      );
    }

    // Accept only string values and string arrays (sanitize unknown types)
    const data: Record<string, string | string[]> = {};
    for (const [k, v] of Object.entries(body)) {
      if (typeof v === 'string') {
        data[k] = v;
      } else if (Array.isArray(v) && v.every((item) => typeof item === 'string')) {
        data[k] = v as string[];
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jsonData = data as any;
    return this.prisma.client.aaMonthlyData.upsert({
      where: { documentId },
      create: { documentId, data: jsonData },
      update: { data: jsonData },
    });
  }
}
