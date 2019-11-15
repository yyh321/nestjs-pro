import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';

import { AppGateway } from './app.gateway';

@Module({
  imports: [UserModule, AuthModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
=======
import { AppResolver } from './app.resolver';
import { UserModule } from './modules/user/user.module';
import { PostModule } from './modules/post/post.module';
import { MockModule } from './modules/mock/mock.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      context: ({ req }) => {
        console.log(req.body.operationName);
      },
    }),
    UserModule,
    PostModule,
    MockModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
>>>>>>> graphpl_server
})
export class AppModule {}
