import { IsString, IsOptional } from 'class-validator';

/**
 * Unified monthly-grid DTO covering all 5 monthly modules:
 * COAWTR26, HAZARD26, TEV26, MAGNA26, LOAD26
 * All fields are optional — only fields belonging to the target module are applied.
 */
export class UpsertAaMonthlyDto {
  // ─── January ───────────────────────────────────────────────────────────────
  @IsString() @IsOptional() january?: string;
  @IsString() @IsOptional() janRemarksMe1?: string;  // COAWTR26
  @IsString() @IsOptional() janRemarksMe2?: string;  // COAWTR26
  @IsString() @IsOptional() janRemarks1?: string;    // HAZARD26 / TEV26 / MAGNA26
  @IsString() @IsOptional() janRemarks2?: string;
  @IsString() @IsOptional() janRemarks3?: string;    // TEV26
  @IsString() @IsOptional() janRemark1?: string;     // LOAD26
  @IsString() @IsOptional() janRemark2?: string;
  @IsString() @IsOptional() janRemark3?: string;
  @IsString() @IsOptional() janRemark4?: string;
  @IsString() @IsOptional() janRemark5?: string;

  // ─── February ──────────────────────────────────────────────────────────────
  @IsString() @IsOptional() february?: string;
  @IsString() @IsOptional() febRemarksMe?: string;   // COAWTR26
  @IsString() @IsOptional() febRemarks1?: string;
  @IsString() @IsOptional() febRemarks2?: string;
  @IsString() @IsOptional() febRemark1?: string;     // LOAD26
  @IsString() @IsOptional() febRemark2?: string;
  @IsString() @IsOptional() febRemark3?: string;
  @IsString() @IsOptional() febRemark4?: string;
  @IsString() @IsOptional() febRemark5?: string;

  // ─── March ─────────────────────────────────────────────────────────────────
  @IsString() @IsOptional() march?: string;
  @IsString() @IsOptional() marRemarksMe?: string;   // COAWTR26
  @IsString() @IsOptional() marRemarks1?: string;
  @IsString() @IsOptional() marRemarks2?: string;
  @IsString() @IsOptional() marRemark1?: string;     // LOAD26
  @IsString() @IsOptional() marRemark2?: string;
  @IsString() @IsOptional() marRemark3?: string;
  @IsString() @IsOptional() marRemark4?: string;
  @IsString() @IsOptional() marRemark5?: string;

  // ─── April ─────────────────────────────────────────────────────────────────
  @IsString() @IsOptional() april?: string;
  @IsString() @IsOptional() aprRemarksMe?: string;   // COAWTR26
  @IsString() @IsOptional() aprRemarks1?: string;
  @IsString() @IsOptional() aprRemarks2?: string;
  @IsString() @IsOptional() aprRemarks?: string;     // MAGNA26
  @IsString() @IsOptional() aprilDup?: string;       // TEV26
  @IsString() @IsOptional() aprDupRemarks1?: string; // TEV26
  @IsString() @IsOptional() aprDupRemarks2?: string; // TEV26
  @IsString() @IsOptional() aprRemark1?: string;     // LOAD26
  @IsString() @IsOptional() aprRemark2?: string;
  @IsString() @IsOptional() aprRemark3?: string;
  @IsString() @IsOptional() aprRemark4?: string;
  @IsString() @IsOptional() aprRemark5?: string;

  // ─── May ───────────────────────────────────────────────────────────────────
  @IsString() @IsOptional() may?: string;
  @IsString() @IsOptional() mayRemarksMe?: string;   // COAWTR26
  @IsString() @IsOptional() mayRemarks1?: string;
  @IsString() @IsOptional() mayRemarks2?: string;
  @IsString() @IsOptional() mayRemark1?: string;     // LOAD26
  @IsString() @IsOptional() mayRemark2?: string;
  @IsString() @IsOptional() mayRemark3?: string;
  @IsString() @IsOptional() mayRemark4?: string;
  @IsString() @IsOptional() mayRemark5?: string;

  // ─── June ──────────────────────────────────────────────────────────────────
  @IsString() @IsOptional() june?: string;
  @IsString() @IsOptional() junRemarksMe?: string;   // COAWTR26
  @IsString() @IsOptional() junRemarks1?: string;
  @IsString() @IsOptional() junRemarks2?: string;
  @IsString() @IsOptional() junRemark1?: string;     // LOAD26
  @IsString() @IsOptional() junRemark2?: string;
  @IsString() @IsOptional() junRemark3?: string;
  @IsString() @IsOptional() junRemark4?: string;
  @IsString() @IsOptional() junRemark5?: string;

  // ─── July ──────────────────────────────────────────────────────────────────
  @IsString() @IsOptional() july?: string;
  @IsString() @IsOptional() julRemarksMe?: string;   // COAWTR26
  @IsString() @IsOptional() julRemarks1?: string;
  @IsString() @IsOptional() julRemarks2?: string;
  @IsString() @IsOptional() julRemarks3?: string;    // LOAD26
  @IsString() @IsOptional() julRemarks4?: string;
  @IsString() @IsOptional() julRemarks5?: string;

  // ─── August ────────────────────────────────────────────────────────────────
  @IsString() @IsOptional() august?: string;
  @IsString() @IsOptional() augRemarks1?: string;
  @IsString() @IsOptional() augRemarks2?: string;
  @IsString() @IsOptional() augRemarks3?: string;    // LOAD26
  @IsString() @IsOptional() augRemarks4?: string;
  @IsString() @IsOptional() augRemarks5?: string;

  // ─── September ─────────────────────────────────────────────────────────────
  @IsString() @IsOptional() september?: string;
  @IsString() @IsOptional() sepRemarks1?: string;
  @IsString() @IsOptional() sepRemarks2?: string;
  @IsString() @IsOptional() sepRemarks3?: string;    // LOAD26
  @IsString() @IsOptional() sepRemarks4?: string;
  @IsString() @IsOptional() sepRemarks5?: string;

  // ─── October ───────────────────────────────────────────────────────────────
  @IsString() @IsOptional() october?: string;
  @IsString() @IsOptional() octRemarks1?: string;
  @IsString() @IsOptional() octRemarks2?: string;
  @IsString() @IsOptional() octRemarks3?: string;    // LOAD26
  @IsString() @IsOptional() octRemarks4?: string;
  @IsString() @IsOptional() octRemarks5?: string;

  // ─── November ──────────────────────────────────────────────────────────────
  @IsString() @IsOptional() november?: string;
  @IsString() @IsOptional() novRemarks1?: string;
  @IsString() @IsOptional() novRemarks2?: string;
  @IsString() @IsOptional() novRemarks3?: string;    // LOAD26
  @IsString() @IsOptional() novRemarks4?: string;
  @IsString() @IsOptional() novRemarks5?: string;

  // ─── December ──────────────────────────────────────────────────────────────
  @IsString() @IsOptional() december?: string;
  @IsString() @IsOptional() decRemarks1?: string;
  @IsString() @IsOptional() decRemarks2?: string;
  @IsString() @IsOptional() decRemarks3?: string;    // LOAD26
  @IsString() @IsOptional() decRemarks4?: string;
  @IsString() @IsOptional() decRemarks5?: string;
}
