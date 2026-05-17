import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { JwtAuthGuard } from './../guard/jwt-guard.js';
import { Logger, ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import { AllExceptionsFilter } from './filters/all-exceptions.filter.js';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';
import path from 'path';

const nodeEnv = (process.env.NODE_ENV ?? '').toLowerCase();
const envFile = nodeEnv === 'production' ? '.env.production' : `.env.${nodeEnv || 'development'}`;
config({ path: path.resolve(process.cwd(), envFile), override: true });
config({ path: path.resolve(process.cwd(), '.env') });

function validateEnv() {
  const required = ['JWT_SECRET_KEY', 'DATABASE_URL', 'CORS_ORIGINS'];
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

  const normalizeOrigin = (origin: string) => origin.trim().replace(/\/+$/, '');
  const isDevLikeOrigin = (origin: string) => {
    try {
      const { hostname, protocol } = new URL(origin);
      if (!['http:', 'https:'].includes(protocol)) return false;
      if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
      if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
      if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
      if (/^172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}$/.test(hostname)) return true;
      return false;
    } catch {
      return false;
    }
  };

  const allowedOrigins = (process.env.CORS_ORIGINS ?? '')
    .split(',')
    .map(normalizeOrigin)
    .filter(Boolean);

  app.enableCors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      const normalizedOrigin = origin ? normalizeOrigin(origin) : origin;
      if (!normalizedOrigin || allowedOrigins.includes(normalizedOrigin) || isDevLikeOrigin(normalizedOrigin)) {
        callback(null, true);
      } else {
        logger.warn(`Blocked CORS request from origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'credentials', 'X-CSRF-Token'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  app.use(helmet({ crossOriginResourcePolicy: false }));
  app.use(compression());
  app.use(cookieParser());

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  app.useGlobalFilters(new AllExceptionsFilter());
  app.setGlobalPrefix('api');

  if (nodeEnv !== 'production') {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('NathRacker API')
      .setDescription('Internal document encoding and verification system')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('docs', app, document, { swaggerOptions: { persistAuthorization: true } });
    logger.log('Swagger docs available at /docs');
  }

  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  logger.log(`Environment: ${process.env.NODE_ENV}`);
  logger.log(`Allowed origins: ${allowedOrigins.join(', ')}`);
  logger.log(`Application is running on port ${port}`);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
