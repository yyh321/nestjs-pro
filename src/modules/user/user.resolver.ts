import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { Post } from '../post/post.model';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  // name: 表示要查询的名字
  @Query(returns => [User], { name: 'users' })
  getAllUsers() {
    return this.userService.findAll();
  }

  @Query(returns => User, { name: 'user' })
  getUser(@Args('id') id: string) {
    return this.userService.findOneById(id);
  }

  @ResolveProperty(type => String)
  nameDashId(@Parent() user: User) {
    return `${user.name}-${user.id}`;
  }

  @ResolveProperty('posts', type => [Post])
  getUserPosts(@Parent() user: User) {
    return this.userService.getPostsByUser(user);
  }

  @Mutation(returns => User)
  updateUserName(@Args('id') id: string, @Args('newName') newName: string) {
    return this.userService.updateUserName(id, newName);
  }
}
