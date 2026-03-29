export class CreateSettingDto {}
export type Module = 'BUS' | 'PCN' | 'SWDI' | 'CVS' | 'MISC';

export type FieldType = 'string' | 'date' | 'number' | 'optional-string';

export interface FieldMeta {
  hint: string;
  required: boolean;
  type: FieldType;
}

export interface SchemaEntry {
  fields: Record<string, FieldMeta>;
}

export interface ImportRowError {
  row: number;
  message: string;
}
