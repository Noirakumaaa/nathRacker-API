import {
  Injectable,
  MethodNotAllowedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateAaModuleDto } from './dto/create-aa-module.dto.js';
import { UpdateAaModuleDto } from './dto/update-aa-module.dto.js';
import { AA_MODULE_CATALOG } from './aa-module-catalog.js';

@Injectable()
export class AaModulesService {
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

  async findAll() {
    await this.ensureCatalogSynced();

    return this.prisma.client.aaDocumentModule.findMany({
      where: { isActive: true },
      orderBy: { code: 'asc' },
      include: {
        _count: { select: { documents: true } },
      },
    });
  }

  async findOne(code: string) {
    await this.ensureCatalogSynced();

    const mod = await this.prisma.client.aaDocumentModule.findUnique({
      where: { code: code.toUpperCase() },
      include: {
        _count: { select: { documents: true } },
      },
    });

    if (!mod) throw new NotFoundException(`Module "${code}" not found.`);
    return mod;
  }

  create(dto: CreateAaModuleDto) {
    void dto;
    throw new MethodNotAllowedException(
      'AA modules are predefined. Creating new modules is disabled.',
    );
  }

  async update(code: string, dto: UpdateAaModuleDto) {
    void code;
    void dto;
    throw new MethodNotAllowedException(
      'AA modules are predefined. Editing modules is disabled.',
    );
  }

  async remove(code: string) {
    void code;
    throw new MethodNotAllowedException(
      'AA modules are predefined. Deleting modules is disabled.',
    );
  }
}
