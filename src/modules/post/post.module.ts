import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostResolver } from './post.resolver';

@Module({
  controllers: [PostController],
  providers: [PostResolver]
})
export class PostModule {}
