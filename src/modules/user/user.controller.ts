import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from '../common/logger/logger.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: LoggerService,
  ) {}
  @Get('profile')
  getUser() {
    this.logger.log('UserController get user.');
    return this.userService.getUser();
  }
}
