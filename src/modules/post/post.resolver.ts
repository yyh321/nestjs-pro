import { Resolver } from '@nestjs/graphql';
import { Post } from './post.model';

@Resolver(Post)
export class PostResolver {}
