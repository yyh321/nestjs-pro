import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AuthController],
  imports: [forwardRef(() => UserModule)], // 使用forwardRef解决循环引用的问题，该方法参数是一个函数，返回值是引用的模块
  providers: [AuthService],
})
export class AuthModule {}
