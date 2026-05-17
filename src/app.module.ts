import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { JwtStrategy } from './../component/jwt.strategy.js';
import { BusModule } from './bus/bus.module.js';
import { SwdiModule } from './swdi/swdi.module.js';
import { AlldocumentsModule } from './alldocuments/alldocuments.module.js';
import { PcnModule } from './lcn/lcn.module.js';
import { CvsModule } from './cvs/cvs.module.js';
import { MiscModule } from './misc/misc.module.js';
import { SummaryModule } from './summary/summary.module.js';
import { SettingsModule } from './settings/settings.module.js';
import { AdminModule } from './admin/admin.module.js';
import { MailModule } from './mail/mail.module.js';
import { AaModulesModule } from './aa-modules/aa-modules.module.js';
import { AaDocumentsModule } from './aa-documents/aa-documents.module.js';
import { AaRemarksModule } from './aa-remarks/aa-remarks.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
    AuthModule,
    PrismaModule,
    BusModule,
    SwdiModule,
    AlldocumentsModule,
    PcnModule,
    CvsModule,
    MiscModule,
    SummaryModule,
    SettingsModule,
    AdminModule,
    MailModule,
    AaModulesModule,
    AaDocumentsModule,
    AaRemarksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
