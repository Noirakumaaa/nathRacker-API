import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { JwtAuthGuard } from './../guard/jwt-guard.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import { AllExceptionsFilter } from './filters/all-exceptions.filter.js';
import { config } from 'dotenv';
import path from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


const envFile = (process.env.NODE_ENV ?? '').toLowerCase() === 'production' ? '.env.production' : '.env.staging';
config({ path: path.resolve(process.cwd(), envFile), override: true });



function validateEnv() {
  const required = ['JWT_SECRET_KEY', 'DATABASE_URL'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

async function bootstrap() {
  validateEnv();
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  const envOrigins = (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

  const allowedOrigins = [
    ...envOrigins,
    'http://nathracker.nathdomain.com',
    'http://nathdomain.com',
    'https://nathracker.nathdomain.com',
    'https://nathdomain.com',
  ];

  // ✅ CORS must be before helmet
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        logger.warn(`Blocked CORS request from origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'credentials',
      'X-CSRF-Token',
    ],
    preflightContinue: false,       // ✅ added
    optionsSuccessStatus: 204,      // ✅ added
  });

  // ✅ helmet after CORS, with crossOriginResourcePolicy disabled
  app.use(helmet({
    crossOriginResourcePolicy: false,
  }));

  app.use(compression());
  app.use(cookieParser());

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  app.setGlobalPrefix('api');

  // ── Swagger (only in non-production) ─────────────────────────────────────
  if ((process.env.NODE_ENV ?? '').toLowerCase() !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('NathRacker API')
      .setDescription('Internal document encoding and verification system')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: { persistAuthorization: true },
    });
    logger.log('Swagger docs available at /docs');
  }

  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  logger.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
  logger.log(`Application is running on port ${port}`);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});