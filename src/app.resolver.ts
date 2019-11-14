import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(type => String)
  getHello() {
    return 'Hello World!';
  }
}
