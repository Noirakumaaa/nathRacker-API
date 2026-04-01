import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { JwtAuthGuard } from './../guard/jwt-guard.js';
import { Logger } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));
  app.setGlobalPrefix('api');
  const allowedOrigins = [
    'http://localhost:5173',
    'http://192.168.68.45:3000',
    'http://localhost:3000',
    'http://192.168.128.1:5173',
    'http://192.168.128.11:5173',
    'http://192.168.68.16:5173',
    'http://192.168.100.19:3000',
    'https://667d-136-158-11-78.ngrok-free.app',
    'http://192.168.68.43:3000',
    process.env.URL,
  ].filter(Boolean);

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        logger.warn(`Blocked CORS request from origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'credentials',
      'X-CSRF-Token',
    ],
  });

  const port = process.env.PORT || 3001;
  await app.listen(port, '0.0.0.0');
  logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
