import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class LoggerService {
  constructor(@Inject('PREFIX') private readonly prefix: string) {}
  log(message: string) {
    console.log(this.prefix, message);
  }
}
