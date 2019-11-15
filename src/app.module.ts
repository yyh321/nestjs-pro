import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
})
export class AppModule {}
