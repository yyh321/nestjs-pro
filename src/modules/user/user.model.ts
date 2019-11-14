import { ObjectType, Field, ID } from 'type-graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;
  @Field()
  name: string;
  @Field(type => [Post])
  posts: Post[];
}
