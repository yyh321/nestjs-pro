import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Post {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;
}
