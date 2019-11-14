import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  test1() {
    console.log('this is test');
    return 'this is test';
  }
}
