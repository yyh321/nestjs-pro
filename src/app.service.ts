import { Injectable, Inject } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Injectable()
export class AppService {
  constructor(private readonly logger: LoggerService) {}

  getHello(): string {
    this.logger.log('AppService: Hello World!!##');
    return 'Hello World';
  }
}
