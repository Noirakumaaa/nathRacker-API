import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common'
import { PrismaClient } from './../../prisma/generated/client.js'
import { PrismaPg } from '@prisma/adapter-pg'

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  client: PrismaClient
  private readonly logger = new Logger(PrismaService.name)

  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    })
    this.client = new PrismaClient({ adapter })
  }

  async onModuleInit() {
    try {
      await this.client.$connect()
      this.logger.log('Database connected successfully')
    } catch (error) {
      this.logger.error('Database connection failed', error as any)
      throw error
    }
  }

  async onModuleDestroy() {
    await this.client.$disconnect()
    this.logger.log('Database disconnected')
  }
}
