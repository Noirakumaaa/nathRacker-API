import { config } from 'dotenv';
const nodeEnv = process.env.NODE_ENV ?? 'development';
config({ path: `.env.${nodeEnv}` });
config({ path: '.env' });

import { PrismaClient } from './prisma/generated/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE
      "PasswordResetCode",
      "EncodedDocument",
      "UserInfo",
      "Bus",
      "Swdi",
      "Pcn",
      "CVS",
      "Miscellaneous",
      "User",
      "Barangay",
      "Lgu",
      "OperationsOfficeNum"
    RESTART IDENTITY CASCADE
  `);
  console.log('All data cleared.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
