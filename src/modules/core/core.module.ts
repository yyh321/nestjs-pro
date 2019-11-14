import { Module, Global } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
@Global()
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
