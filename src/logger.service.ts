import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  constructor() {
    console.log('LoggerService init');
  }
  log(msg: string) {
    console.log(msg);
  }
}
