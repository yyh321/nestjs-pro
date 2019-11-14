import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [forwardRef(() => AuthModule)], // 使用forwardRef解决循环引用的问题，该方法参数是一个函数，返回值是引用的模块
  providers: [UserResolver, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
