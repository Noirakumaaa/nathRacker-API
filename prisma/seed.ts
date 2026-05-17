import { PrismaClient } from './generated/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import { config } from 'dotenv';
import { AA_MODULE_CATALOG } from '../src/aa-modules/aa-module-catalog.js';

config({ path: '.env' });

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding AA document modules...');

  for (const mod of AA_MODULE_CATALOG) {
    await prisma.aaDocumentModule.upsert({
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
    console.log(`  ✓ ${mod.code} — ${mod.name}`);
  }

  console.log('Seed complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
