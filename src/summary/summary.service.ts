import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service.js';
import {
  MonthlySummaryResponse,
  DocTypeSummary,
  SummaryEntry,
} from './dto/create-summary.dto.js';

@Injectable()
export class SummaryService {
  constructor(private prisma: PrismaService) {}

  async getMonthlySummary(
    month: number,
    year: number,
  ): Promise<MonthlySummaryResponse> {
    const start = new Date(year, month - 1, 1);
    const end = new Date(year, month, 1);

    const dateFilter = { gte: start, lt: end };

    const [busRecords, swdiRecords, pcnRecords, cvsRecords, miscRecords] =
      await Promise.all([
        this.prisma.client.bus.findMany({
          where: { date: dateFilter },
          orderBy: { date: 'asc' },
          select: {
            id: true,
            date: true,
            hhId: true,
            granteeName: true,
            remarks: true,
            issue: true,
            verified: true,
          },
        }),
        this.prisma.client.swdi.findMany({
          where: { date: dateFilter },
          orderBy: { date: 'asc' },
          select: {
            id: true,
            date: true,
            hhId: true,
            grantee: true,
            remarks: true,
            issue: true,
            verified: true,
          },
        }),
        this.prisma.client.pcn.findMany({
          where: { date: dateFilter },
          orderBy: { date: 'asc' },
          select: {
            id: true,
            date: true,
            hhId: true,
            granteeName: true,
            remarks: true,
            issue: true,
            verified: true,
          },
        }),
        this.prisma.client.cVS.findMany({
          where: { date: dateFilter },
          orderBy: { date: 'asc' },
          select: {
            id: true,
            date: true,
            idNumber: true,
            facilityName: true,
            remarks: true,
          },
        }),
        this.prisma.client.miscellaneous.findMany({
          where: { date: dateFilter },
          orderBy: { date: 'asc' },
          select: {
            id: true,
            date: true,
            hhId: true,
            granteeName: true,
            remarks: true,
            issue: true,
          },
        }),
      ]);

    const BUS = this.shape(
      busRecords.map((r) => ({
        ...r,
        hhId: r.hhId,
        name: r.granteeName,
        verified: r.verified,
      })),
    );
    const SWDI = this.shape(
      swdiRecords.map((r) => ({
        ...r,
        hhId: r.hhId,
        name: r.grantee,
        verified: r.verified,
      })),
    );
    const PCN = this.shape(
      pcnRecords.map((r) => ({
        ...r,
        hhId: r.hhId,
        name: r.granteeName ?? '',
        verified: r.verified,
      })),
    );
    const CVS = this.shape(
      cvsRecords.map((r) => ({
        ...r,
        hhId: r.idNumber,
        name: r.facilityName,
        issue: null,
        verified: 'NO',
      })),
    );
    const MISCELLANEOUS = this.shape(
      miscRecords.map((r) => ({
        ...r,
        hhId: r.hhId,
        name: r.granteeName,
        verified: 'NO',
      })),
    );

    const totals = {
      encoded:
        BUS.encoded +
        SWDI.encoded +
        PCN.encoded +
        CVS.encoded +
        MISCELLANEOUS.encoded,
      updated:
        BUS.updated +
        SWDI.updated +
        PCN.updated +
        CVS.updated +
        MISCELLANEOUS.updated,
      issue:
        BUS.issue + SWDI.issue + PCN.issue + CVS.issue + MISCELLANEOUS.issue,
    };

    return { month, year, BUS, SWDI, PCN, CVS, MISCELLANEOUS, totals };
  }

  // remarks from the form are: 'ENCODED' | 'UPDATED' | 'ISSUE'
  private remarkToType(remarks: string): 'encode' | 'update' | 'issue' {
    const r = (remarks ?? '').toUpperCase();

    if (r === 'UPDATED') return 'update';
    if (r === 'ISSUE') return 'issue';
    if (r === 'ENCODED') return 'encode';

    // If it's anything else, treat it as 'UPDATED'
    return 'update';
  }

  private shape(records: any[]): DocTypeSummary {
    const entries: SummaryEntry[] = records.map((r) => ({
      id: r.id,
      date: r.date.toISOString(),
      hhId: r.hhId ?? '',
      name: r.name ?? '',
      remarks: r.remarks ?? '',
      issue: r.issue ?? null,
      type: this.remarkToType(r.remarks),
      verified: r.verified ?? 'NO',
    }));

    return {
      encoded: entries.filter((e) => e.type === 'encode').length,
      updated: entries.filter((e) => e.type === 'update').length,
      issue: entries.filter((e) => e.type === 'issue').length,
      entries,
    };
  }
}
