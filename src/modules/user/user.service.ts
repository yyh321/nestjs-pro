import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@Inject('MOCK_DATA') private readonly data: any) {}

  findAll() {
    return this.data.users;
  }

  findOneById(id: string) {
    return this.data.users.filter(item => item.id === id)[0];
  }

  getPostsByUser(user: User) {
    return this.data.posts.filter(item => item.userId === user.id);
  }

  updateUserName(id: string, newName: string) {
    const users = this.data.users;
    const index = users.findIndex(item => item.id === id);
    users[index].name = newName;
    return users[index];
  }
}
