export class SummaryQueryDto {
  month: number; // 1-12
  year: number;
}

export interface DocTypeSummary {
  encoded: number;
  updated: number;
  issue: number;
  entries: SummaryEntry[];
}

export interface SummaryEntry {
  id: number;
  date: string;
  hhId: string;
  name: string;
  remarks: string;
  issue: string | null;
  type: 'encode' | 'update' | 'issue';
  verified: string;
}

export interface MonthlySummaryResponse {
  month: number;
  year: number;
  BUS: DocTypeSummary;
  SWDI: DocTypeSummary;
  PCN: DocTypeSummary;
  CVS: DocTypeSummary;
  MISCELLANEOUS: DocTypeSummary;
  totals: {
    encoded: number;
    updated: number;
    issue: number;
  };
}