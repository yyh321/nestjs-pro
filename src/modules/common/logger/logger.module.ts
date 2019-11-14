import { Module, DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({})
export class LoggerModule {
  // 动态导入，添加一个静态方法，例如regisiter，返回类型是DynamicModule
  static regisiter(prefix: string): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        LoggerService,
        {
          provide: 'PREFIX',
          useValue: prefix,
        },
      ],
      exports: [LoggerService],
    };
  }
}
