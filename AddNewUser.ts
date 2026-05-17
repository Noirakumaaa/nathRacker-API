import { config } from 'dotenv';
const nodeEnv = process.env.NODE_ENV ?? 'development';
config({ path: `.env.${nodeEnv}` });
config({ path: '.env' });
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
    firstName: 'ADMIN',
    lastName: 'ADMIN',
    middleName: 'ADMIN',
    govUsername: 'ADMIN',
    email: 'hernandezlnathaniel9@@gmail.com',
    password: 'ADMINADMIN#01',
    phone: '09000000000',
    role: 'ADMIN' as const,
    assignedLGUID: 4,
    assignedOperationId: 8,
    assignedBarangayId: 1,
<<<<<<< HEAD
=======
  },
  {
    firstName: 'NATHANIEL',
    lastName: 'HERNANDEZ',
    middleName: 'BARBASA',
    govUsername: 'nbhernandez',
    email: 'hernandezlnathaniel@gmail.com',
    password: 'ADMINADMIN#01',
    phone: '09166575886',
    role: 'ADMIN' as const,
    assignedLGUID: 4,
    assignedOperationId: 8,
    assignedBarangayId: 1,
  },
  {
    firstName: 'MARIA ANDREA GELLE',
    lastName: 'PAREDES',
    middleName: 'SERRANO',
    govUsername: 'magsparedes',
    email: 'mariaandreagellep@gmail.com',
    password: 'ADMINADMIN#01',
    phone: '09506286951',
    role: 'ADMIN' as const,
    assignedLGUID: 4,
    assignedOperationId: 8,
    assignedBarangayId: 1,
>>>>>>> e038e52bb1f6ada54b7b925b73c3dfd96bd07c3b
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
  { name: 'PARAÑAQUE', operationsOfficeNumId: 8 },
  { name: 'LAS PIÑAS', operationsOfficeNumId: 8 },
  { name: 'MUNTINLUPA', operationsOfficeNumId: 8 },
  { name: "OFFICE BASED", operationsOfficeNumId: 8 }
];

const newBarangays = [
  { name: "OFFICE BASED", lguId: 4 },
  // PARANAQUE
  { name: 'BACLARAN', lguId: 1 },
  { name: 'BF HOMES', lguId: 1 },
  { name: 'DON BOSCO', lguId: 1 },
  { name: 'LA HUERTA', lguId: 1 },
  { name: 'MARCELO GREEN', lguId: 1 },
  { name: 'MERVILLE', lguId: 1 },
  { name: 'MOONWALK', lguId: 1 },
  { name: 'SAN ANTONIO', lguId: 1 },
  { name: 'SAN DIONISIO', lguId: 1 },
  { name: 'SAN ISIDRO', lguId: 1 },
  { name: 'SAN MARTIN DE PORRES', lguId: 1 },
  { name: 'SANTO NINO', lguId: 1 },
  { name: 'SUN VALLEY', lguId: 1 },
  { name: 'TAMBO', lguId: 1 },
  { name: 'VITALEZ', lguId: 1 },

  // LAS PINAS
  { name: 'ALMANZA DOS', lguId: 2 },
  { name: 'ALMANZA UNO', lguId: 2 },
  { name: 'BF INTERNATIONAL VILLAGE', lguId: 2 },
  { name: 'DANIEL FAJARDO', lguId: 2 },
  { name: 'DON GALO', lguId: 1 },
  { name: 'ELIAS ALDANA', lguId: 2 },
  { name: 'ILAYA', lguId: 2 },
  { name: 'MANUYO DOS', lguId: 2 },
  { name: 'MANUYO UNO', lguId: 2 },
  { name: 'PAMPLONA DOS', lguId: 2 },
  { name: 'PAMPLONA TRES', lguId: 2 },
  { name: 'PAMPLONA UNO', lguId: 2 },
  { name: 'PILAR', lguId: 2 },
  { name: 'PULANG LUPA DOS', lguId: 2 },
  { name: 'PULANG LUPA UNO', lguId: 2 },
  { name: 'TALON DOS', lguId: 2 },
  { name: 'TALON KUATRO', lguId: 2 },
  { name: 'TALON SINGKO', lguId: 2 },
  { name: 'TALON TRES', lguId: 2 },
  { name: 'TALON UNO', lguId: 2 },
  { name: 'ZAPOTE', lguId: 2 },

  // MUNTINLUPA
  { name: 'ALABANG', lguId: 3 },
  { name: 'AYALA ALABANG', lguId: 3 },
  { name: 'BAYANAN', lguId: 3 },
  { name: 'BULI', lguId: 3 },
  { name: 'CUPANG', lguId: 3 },
  { name: 'POBLACION', lguId: 3 },
  { name: 'PUTATAN', lguId: 3 },
  { name: 'SUCAT', lguId: 3 },
  { name: 'TUNASAN', lguId: 3 },


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
(async () => {
  await addOperationsOffices();
  await addLgus();
  await addBarangays();
  await verifyData();
  await addNewUsers();
})();
