import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: './prisma/prisma.schema',
  datasource: {
    url: env('DATABASE_URL'),
  },
});