import { PrismaClient } from './prisma/generated/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import * as argon2 from 'argon2';

function createPrisma() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter });
}

// ─── Edit data below then call the matching function at the bottom ───────────

const newUsers = [
  {
    firstName: 'Nathaniel',
    lastName: 'Hernandez',
    middleName: 'Barbasa',
    govUsername: 'nbhernandez_encoder',
    email: 'hernandezlnathaniel@gmail.com',
    password: 'ADMIN',
    phone: '09166575886',
    role: 'ADMIN' as const,
    assignedLGUID: 4,
    assignedOperationId: 8,
    assignedBarangayId: 1,
  },
];

const newOperationsOffices = [
  { name: 'Operations Office 1' },
  { name: 'Operations Office 2' },
  { name: 'Operations Office 3' },
  { name: 'Operations Office 4' },
  { name: 'Operations Office 5' },
  { name: 'Operations Office 6' },
  { name: 'Operations Office 7' },
  { name: 'Operations Office 8' },
  { name: 'Operations Office 9' },
];

const newLgus = [
  { name: 'PARANAQUE', operationsOfficeNumId: 8 },
  { name: 'MUNTINLUPA', operationsOfficeNumId: 8 },
  { name: 'LAS PINAS', operationsOfficeNumId: 8 },
  { name: 'OFFICE BASED', operationsOfficeNumId:8  }
];

const newBarangays = [
  { name: 'OFFICE BASED', lguId: 4 },
];

// ─── Functions ───────────────────────────────────────────────────────────────

async function addNewUsers() {
  const prisma = createPrisma();
  try {
    for (const user of newUsers) {
      const existing = await prisma.user.findFirst({
        where: { OR: [{ email: user.email }, { govUsername: user.govUsername }] },
      });
      if (existing) { console.warn(`Skipped (already exists): ${user.govUsername}`); continue; }

      const hashedPassword = await argon2.hash(user.password);
      const created = await prisma.user.create({
        data: {
          govUsername: user.govUsername,
          email: user.email,
          password: hashedPassword,
          role: user.role,
          userInfo: {
            create: {
              firstName: user.firstName,
              middleName: user.middleName,
              lastName: user.lastName,
              phone: user.phone,
              assignedLGUID: user.assignedLGUID,
              assignedOperationId: user.assignedOperationId,
              assignedBarangayId: user.assignedBarangayId,
            },
          },
        },
      });
      console.log(`User created: ${created.govUsername}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function addOperationsOffices() {
  const prisma = createPrisma();
  try {
    for (const office of newOperationsOffices) {
      const existing = await prisma.operationsOfficeNum.findFirst({ where: { name: office.name } });
      if (existing) { console.warn(`Skipped (already exists): ${office.name}`); continue; }

      const created = await prisma.operationsOfficeNum.create({ data: office });
      console.log(`Operations office created: ${created.name} | id: ${created.id}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function addLgus() {
  const prisma = createPrisma();
  try {
    for (const lgu of newLgus) {
      const existing = await prisma.lgu.findFirst({ where: { name: lgu.name, operationsOfficeNumId: lgu.operationsOfficeNumId } });
      if (existing) { console.warn(`Skipped (already exists): ${lgu.name}`); continue; }

      const created = await prisma.lgu.create({ data: lgu });
      console.log(`LGU created: ${created.name} | id: ${created.id}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function addBarangays() {
  const prisma = createPrisma();
  try {
    for (const barangay of newBarangays) {
      const existing = await prisma.barangay.findFirst({ where: { name: barangay.name, lguId: barangay.lguId } });
      if (existing) { console.warn(`Skipped (already exists): ${barangay.name}`); continue; }

      const created = await prisma.barangay.create({ data: barangay });
      console.log(`Barangay created: ${created.name} | id: ${created.id}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function verifyData() {
  const prisma = createPrisma();
  try {
    const barangays = await prisma.barangay.findMany({
      include: {
        lgu: {
          include: {
            operationsOfficeNum: true,
          },
        },
      },
    });

    for (const b of barangays) {
      console.log(
        `Barangay: ${b.name} (id:${b.id}) → LGU: ${b.lgu.name} (id:${b.lgu.id}) → Office: ${b.lgu.operationsOfficeNum.name} (id:${b.lgu.operationsOfficeNum.id})`
      );
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// ─── Call the function you need ──────────────────────────────────────────────
addNewUsers();
// addOperationsOffices();
// addLgus();
// addBarangays();
// verifyData();
