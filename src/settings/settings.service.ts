import {
  Injectable,
  BadRequestException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import * as XLSX from 'xlsx';
import { Module } from './dto/create-setting.dto.js';
import { SchemaEntry } from './dto/create-setting.dto.js';
import { ImportRowError } from './dto/create-setting.dto.js';
import type { Request, Response } from 'express';
import { SecurityData } from './dto/update-security.dto.js';
import { NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
const sessionTimeoutFormat = {
  15: 15 * 60 * 1000,
  30: 30 * 60 * 1000,
  1: 60 * 60 * 1000,
  2: 2 * 60 * 60 * 1000,
  3: 3 * 60 * 60 * 1000,
  4: 4 * 60 * 60 * 1000,
  never: 365 * 24 * 60 * 60 * 1000,
} as const;

function getCookieOptions() {
  const env = (process.env.NODE_ENV ?? '').toLowerCase();
  const secure = env === 'production' || env === 'staging';
  const sameSite: 'none' | 'lax' = secure ? 'none' : 'lax';
  return {
    httpOnly: true,
    secure,
    sameSite,
  };
}

const COLUMN_MAP: Record<Module, Record<string, string>> = {
  BUS: {
    LGU: 'lgu',
    BARANGAY: 'barangay',
    HHID: 'hhId',
    GRANTEE: 'granteeName',
    'TYPE OF UPDATE': 'typeOfUpdate',
    'UPDATE INFO': 'updateInfo',
    REMARKS: 'remarks',
    'SUBJECT OF CHANGE': 'subjectOfChange',
    'BDM - NUMBER': 'drn',
    'BDM - CITY LINK or SWA': 'cl',
    DATE: 'date',
    ISSUE: 'issue',
    ISSUES: 'issue',
    NOTE: 'note',
  },
  PCN: {
    HHID: 'hhId',
    GRANTEE: 'granteeName',
    LGU: 'lgu',
    BARANGAY: 'barangay',
    REMARKS: 'remarks',
    'SUBJECT OF CHANGE': 'subjectOfChange',
    PCN: 'PCN',
    LRN: 'LRN',
    'BDM - NUMBER': 'drn',
    'BDM - CITY LINK or SWA': 'cl',
    DATE: 'date',
    ISSUE: 'issue',
    ISSUES: 'issue',
    NOTE: 'note',
  },
  SWDI: {
    HHID: 'hhId',
    LGU: 'lgu',
    BARANGAY: 'barangay',
    GRANTEE: 'grantee',
    'SWDI SCORE': 'swdiScore',
    'SWDI LEVEL': 'swdiLevel',
    REMARKS: 'remarks',
    DATE: 'date',
    'BDM - CITY LINK or SWA': 'cl',
    'BDM - NUMBER': 'drn',
    ISSUE: 'issue',
    ISSUES: 'issue',
    NOTE: 'note',
  },
  CVS: {
    'ID NUMBER': 'idNumber',
    LGU: 'lgu',
    BARANGAY: 'barangay',
    'FACILITY NAME': 'facilityName',
    'FORM TYPE': 'formType',
    REMARKS: 'remarks',
    PERIOD: 'Period',
    ISSUE: 'Issue',
    ISSUES: 'Issue',
    DATE: 'date',
  },
  MISC: {
    LGU: 'lgu',
    BARANGAY: 'barangay',
    HHID: 'hhId',
    GRANTEE: 'granteeName',
    'DOCUMENT TYPE': 'documentType',
    REMARKS: 'remarks',
    DATE: 'date',
    'SUBJECT OF CHANGE': 'subjectOfChange',
    'BDM - NUMBER': 'drn',
    'BDM - CITY LINK or SWA': 'cl',
    ISSUE: 'issue',
    ISSUES: 'issue',
    NOTE: 'note',
  },
};

const MODULE_SCHEMA: Record<Module, SchemaEntry> = {
  BUS: {
    fields: {
      lgu: { hint: '', required: true, type: 'string' },
      barangay: { hint: '', required: true, type: 'string' },
      hhId: { hint: '', required: true, type: 'string' },
      granteeName: { hint: '', required: true, type: 'string' },
      typeOfUpdate: { hint: '', required: true, type: 'string' },
      remarks: { hint: '', required: true, type: 'string' },
      updateInfo: { hint: '', required: false, type: 'optional-string' },
      subjectOfChange: { hint: '', required: true, type: 'string' },
      drn: { hint: '', required: false, type: 'optional-string' },
      cl: { hint: '', required: false, type: 'optional-string' },
      date: { hint: '', required: true, type: 'date' },
      issue: { hint: '', required: false, type: 'optional-string' },
      note: { hint: '', required: false, type: 'optional-string' },
    },
  },
  PCN: {
    fields: {
      hhId: { hint: '', required: true, type: 'string' },
      granteeName: { hint: '', required: true, type: 'string' },
      lgu: { hint: '', required: true, type: 'string' },
      barangay: { hint: '', required: true, type: 'string' },
      remarks: { hint: '', required: true, type: 'string' },
      subjectOfChange: { hint: '', required: true, type: 'string' },
      PCN: { hint: '', required: true, type: 'string' },
      LRN: { hint: '', required: true, type: 'string' },
      drn: { hint: '', required: false, type: 'optional-string' },
      cl: { hint: '', required: false, type: 'optional-string' },
      date: { hint: '', required: true, type: 'date' },
      issue: { hint: '', required: false, type: 'optional-string' },
      note: { hint: '', required: false, type: 'optional-string' },
    },
  },
  SWDI: {
    fields: {
      hhId: { hint: '', required: true, type: 'string' },
      lgu: { hint: '', required: true, type: 'string' },
      barangay: { hint: '', required: true, type: 'string' },
      grantee: { hint: '', required: true, type: 'string' },
      swdiScore: { hint: '', required: true, type: 'number' },
      swdiLevel: { hint: '', required: true, type: 'string' },
      remarks: { hint: '', required: true, type: 'string' },
      date: { hint: '', required: true, type: 'date' },
      cl: { hint: '', required: false, type: 'optional-string' },
      drn: { hint: '', required: false, type: 'optional-string' },
      issue: { hint: '', required: false, type: 'optional-string' },
      note: { hint: '', required: false, type: 'optional-string' },
    },
  },
  CVS: {
    fields: {
      idNumber: { hint: '', required: true, type: 'string' },
      lgu: { hint: '', required: true, type: 'string' },
      barangay: { hint: '', required: true, type: 'string' },
      facilityName: { hint: '', required: true, type: 'string' },
      formType: { hint: '', required: true, type: 'string' },
      remarks: { hint: '', required: true, type: 'string' },
      Period: { hint: '', required: true, type: 'string' },
      Issue: { hint: '', required: false, type: 'optional-string' },
      date: { hint: '', required: true, type: 'date' },
    },
  },
  MISC: {
    fields: {
      lgu: { hint: '', required: false, type: 'optional-string' },
      barangay: { hint: '', required: false, type: 'optional-string' },
      hhId: { hint: '', required: true, type: 'string' },
      granteeName: { hint: '', required: true, type: 'string' },
      documentType: { hint: '', required: true, type: 'string' },
      remarks: { hint: '', required: true, type: 'string' },
      date: { hint: '', required: true, type: 'date' },
      subjectOfChange: { hint: '', required: false, type: 'optional-string' },
      drn: { hint: '', required: false, type: 'optional-string' },
      cl: { hint: '', required: false, type: 'optional-string' },
      issue: { hint: '', required: false, type: 'optional-string' },
      note: { hint: '', required: false, type: 'optional-string' },
    },
  },
};

@Injectable()
export class SettingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async processImport(file: Express.Multer.File, module: Module, req: Request) {
    const schema = MODULE_SCHEMA[module];

    const rows = this.parseFile(file, module);
    if (rows.length === 0)
      throw new BadRequestException(
        'The file is empty — please upload a file with data rows.',
      );

    const validationErrors = this.validateRows(rows, schema);
    if (validationErrors.length > 0) {
      throw new UnprocessableEntityException({
        message: `Validation failed — ${validationErrors.length} row(s) have issues. Fix them before importing.`,
        errors: validationErrors.map((e) => `Row ${e.row}: ${e.message}`),
      });
    }

    const { inserted, errors } = await this.persistRows(rows, module, req);

    if (errors.length > 0 && inserted === 0) {
      throw new UnprocessableEntityException({
        message: `Import failed — all ${rows.length} row(s) could not be saved.`,
        errors,
      });
    }

    if (errors.length > 0) {
      return {
        success: false,
        message: `Partial import — ${inserted} row(s) saved, ${errors.length} row(s) failed.`,
        inserted,
        failed: errors.length,
        errors,
      };
    }

    return {
      success: true,
      message: `Successfully imported ${inserted} row(s).`,
      inserted,
    };
  }

  private parseFile(
    file: Express.Multer.File,
    module: Module,
  ): Record<string, unknown>[] {
    const isCSV =
      file.mimetype === 'text/csv' || file.originalname.endsWith('.csv');
    const isExcel =
      file.mimetype.includes('spreadsheetml') ||
      /\.xlsx?$/.test(file.originalname);

    if (!isCSV && !isExcel) {
      throw new BadRequestException('Unsupported file type. Use CSV or Excel.');
    }

    const workbook = XLSX.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
    });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
    const map = COLUMN_MAP[module];

    const BLANK_PLACEHOLDERS = new Set(['-', 'na', 'none', 'null', '']);

    return rows.map((row) =>
      Object.fromEntries(
        Object.entries(row).map(([k, v]) => {
          const trimmed = k.trim();
          const mappedKey = map[trimmed] ?? trimmed;
          if (v instanceof Date) return [mappedKey, v];
          const strVal =
            v === undefined || v === null
              ? ''
              : typeof v === 'string'
                ? v.trim()
                : String(v);
          const normalized = BLANK_PLACEHOLDERS.has(strVal.toLowerCase())
            ? 'N/A'
            : strVal || v;
          return [mappedKey, normalized];
        }),
      ),
    );
  }

  private validateRows(
    rows: Record<string, unknown>[],
    schema: SchemaEntry,
  ): ImportRowError[] {
    const errors: ImportRowError[] = [];
    const fieldEntries = Object.entries(schema.fields);

    rows.forEach((row, i) => {
      const rowNum = i + 2;

      for (const [field, meta] of fieldEntries.filter(([, m]) => m.required)) {
        const value = row[field];
        const isBlank = value === undefined || value === null || value === '';
        const isNAOnTyped =
          value === 'N/A' && (meta.type === 'date' || meta.type === 'number');
        if (isBlank || isNAOnTyped) {
          errors.push({ row: rowNum, message: `Missing ${field}` });
        }
      }

      for (const [field, meta] of fieldEntries) {
        const value = row[field];
        if (value === undefined || value === null || value === '') continue;

        if (
          meta.type === 'date' &&
          !(value instanceof Date) &&
          isNaN(Date.parse(String(value)))
        ) {
          errors.push({
            row: rowNum,
            message: `Invalid date format for ${field}`,
          });
        }

        if (meta.type === 'number' && isNaN(Number(value))) {
          errors.push({ row: rowNum, message: `Invalid number for ${field}` });
        }
      }
    });

    return errors;
  }

  private async persistRows(
    rows: Record<string, unknown>[],
    module: Module,
    req: Request,
  ): Promise<{ inserted: number; errors: string[] }> {
    const user = (req as any).user;

    const modelMap: Record<Module, string> = {
      BUS: 'bus',
      PCN: 'pcn',
      SWDI: 'swdi',
      CVS: 'cVS',
      MISC: 'miscellaneous',
    };

    const duplicateKeyMap: Record<
      Module,
      (row: Record<string, unknown>) => Record<string, unknown>
    > = {
      BUS: (r) => ({
        hhId: r['hhId'],
        typeOfUpdate: r['typeOfUpdate'],
        subjectOfChange: r['subjectOfChange'],
        date: r['date'],
      }),
      PCN: (r) => ({
        hhId: r['hhId'],
        subjectOfChange: r['subjectOfChange'],
        date: r['date'],
      }),
      SWDI: (r) => ({ hhId: r['hhId'], date: r['date'] }),
      CVS: (r) => ({
        idNumber: r['idNumber'],
        formType: r['formType'],
        date: r['date'],
      }),
      MISC: (r) => ({
        hhId: r['hhId'],
        documentType: r['documentType'],
        date: r['date'],
      }),
    };

    const model = modelMap[module];
    const allowedFields = new Set(Object.keys(MODULE_SCHEMA[module].fields));
    let inserted = 0;

    const persistErrors: string[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNum = i + 2;

      try {
        const filteredRow = Object.fromEntries(
          Object.entries(row).filter(([k]) => allowedFields.has(k)),
        );

        const REMARKS_MAP: Record<string, string> = {
          YES: 'ENCODED',
          NO: 'ISSUE',
          UPDATED: 'UPDATED',
        };

        if (filteredRow['remarks']) {
          const key = String(filteredRow['remarks']).trim().toUpperCase();
          filteredRow['remarks'] = REMARKS_MAP[key] ?? filteredRow['remarks'];
        }

        const payload = {
          ...filteredRow,
          encodedBy: user.govUsername,
          userId: user.id,
          operationsOfficeNumId: user.assignedOperationId,
        };

        const duplicateWhere = duplicateKeyMap[module](filteredRow);
        const existing = await (this.prisma.client as any)[model].findFirst({
          where: duplicateWhere,
        });
        if (existing) continue;

        const created = await (this.prisma.client as any)[model].create({
          data: payload,
        });

        await this.prisma.client.encodedDocument.create({
          data: {
            idNumber: String(row['hhId'] ?? row['idNumber'] ?? ''),
            name: String(
              row['granteeName'] ?? row['grantee'] ?? row['facilityName'] ?? '',
            ),
            documentType: module,
            documentId: created.id,
            subjectOfChange: String(
              row['subjectOfChange'] ??
                row['granteeName'] ??
                row['grantee'] ??
                row['facilityName'] ??
                '',
            ),
            typeOfUpdate: String(row['typeOfUpdate'] ?? ''),
            remarks: String(row['remarks'] ?? ''),
            date: created.date ?? new Date(),
            drn: String(row['drn'] ?? ' '),
            userId: user.id,
            operationsOfficeNumId: user.assignedOperationId,
            govUsername: user.govUsername,
          },
        });

        inserted++;
      } catch (err: any) {
        persistErrors.push(`Row ${rowNum}: ${this.friendlyError(err)}`);
      }
    }

    return { inserted, errors: persistErrors };
  }

  private friendlyError(err: any): string {
    const msg: string = err?.message ?? '';

    const invalidValue = msg.match(
      /Argument `(\w+)`: Invalid value provided\. Expected (\w+), provided (\w+)/,
    );
    if (invalidValue) {
      const [, field, expected, got] = invalidValue;
      return `"${field}" has the wrong value type (expected ${expected.toLowerCase()}, got ${got.toLowerCase()})`;
    }

    const invalidChars = msg.match(
      /Invalid value for argument `(\w+)`.*Expected ISO-8601 DateTime/,
    );
    if (invalidChars) {
      return `"${invalidChars[1]}" has an invalid date — make sure it's a proper date format`;
    }

    const unknownArg = msg.match(/Unknown argument `(\w+)`/);
    if (unknownArg) {
      return `"${unknownArg[1]}" is not a recognized column and was skipped`;
    }

    const missingField = msg.match(/Argument `(\w+)` is missing/);
    if (missingField) {
      return `"${missingField[1]}" is required but was not provided`;
    }

    return 'This row could not be saved — please check the values and try again';
  }

  GetUserInfo(req: Request) {
    const user = req.user;

    if (!user) {
      return { message: 'AUTHENTICATION FAILED' };
    }

    return this.prisma.client.userInfo.findFirst({
      where: {
        userId: user.id,
      },
      select: {
        firstName: true,
        lastName: true,
        phone: true,
        theme: true,
        user: {
          select: {
            govUsername: true,
            email: true,
          },
        },
      },
    });
  }

  async UpdateSecuritySetting(
    SecurityData: SecurityData,
    req: Request,
    res: Response,
  ) {
    const user = req.user;
    if (!user) {
      throw new BadRequestException('User not authenticated');
    }
    const sessionMs = sessionTimeoutFormat[SecurityData.sessionTime];
    const newSessionTimeUpdate = await this.prisma.client.userInfo.update({
      where: { userId: user.id },
      data: {
        sessionTime: sessionMs,
        loginAlert: SecurityData.loginAlert,
        twoFactorAuth: SecurityData.twoFactorAuth,
      },
    });

    const token = this.jwtService.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
        govUsername: user.govUsername,
        firstName: user.firstName,
        lastName: user.lastName,
        assignedOperationId: user.assignedOperationId,
      },
      {
        secret: process.env.JWT_SECRET_KEY || 'i12*^(@G2315dsi2193T',
        expiresIn: Math.floor(sessionMs / 1000),
      },
    );

    res.cookie('accessToken', token, {
      ...getCookieOptions(),
      maxAge: sessionMs,
    });
    res.setHeader('Cache-Control', 'no-store');

    return {
      message:
        'Session time updated successfully and applied to the current session.',
      newData: { newSessionTimeUpdate },
      updated: true,
    };
  }

  async GetSecurityData(req: Request) {
    const user = req.user;
    if (!user) {
      throw new BadRequestException('User not authenticated');
    }

    const securityData = await this.prisma.client.userInfo.findUnique({
      where: { userId: user.id },
      select: {
        sessionTime: true,
        loginAlert: true,
        twoFactorAuth: true,
      },
    });

    if (!securityData) {
      throw new NotFoundException('Security data not found for user');
    }

    return securityData;
  }

  async UpdateTheme(themeValue: 'LIGHT' | 'DARK', req: Request) {
    const user = req.user;
    if (!user) throw new BadRequestException('User not authenticated');

    await this.prisma.client.userInfo.update({
      where: { userId: user.id },
      data: { theme: themeValue },
    });

    return { message: 'Theme updated successfully', updated: true };
  }
}
