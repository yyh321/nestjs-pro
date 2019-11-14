import { Module } from '@nestjs/common';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule.regisiter('common')], // 调用LoggerModule中的regisiter方法
  exports: [LoggerModule],
})
export class CommonModule {}
