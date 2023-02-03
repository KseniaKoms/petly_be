import { Controller } from '@nestjs/common';
import { Inject, Post } from '@nestjs/common/decorators';
import { Routes } from 'src/utils/routes';
import { Services } from 'src/utils/services';
import { IUserService } from 'src/modules/user/interfaces/IUserServices';
import { UserDto } from '../dto/user.dto';
import { User } from 'src/database/user.entity';

@Controller(Routes.USER)
export class UserController {
  constructor(@Inject(Services.USER) private userService: IUserService) {}
  @Post(Routes.REGISTER)
  createUser(user: UserDto): Promise<User> {
    return this.userService.createUser(user);
  }
}
