import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';

import { AppGateway } from './app.gateway';

@Module({
  imports: [UserModule, AuthModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
