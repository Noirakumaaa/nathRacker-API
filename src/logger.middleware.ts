import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const start = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const ms = Date.now() - start;
      const log = `${method} ${originalUrl} ${statusCode} — ${ms}ms`;

      if (statusCode >= 500) this.logger.error(log);
      else if (statusCode >= 400) this.logger.warn(log);
      else this.logger.log(log);
    });

    next();
  }
}
