import { Module, Global } from '@nestjs/common';
import { mockData } from './mock.data';

@Global()
@Module({
  providers: [
    {
      provide: 'MOCK_DATA',
      useValue: mockData,
    },
  ],
  exports: ['MOCK_DATA'],
})
export class MockModule {}
