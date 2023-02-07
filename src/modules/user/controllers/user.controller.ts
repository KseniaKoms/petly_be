import { Controller } from '@nestjs/common';
import { Inject, Post } from '@nestjs/common/decorators';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Routes } from 'src/utils/routes';
import { Services } from 'src/utils/services';
import { IUserService } from 'src/modules/user/interfaces/IUserServices';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { User } from 'src/database/user.entity';

@ApiTags('users')
@Controller(Routes.USER)
export class UserController {
  constructor(@Inject(Services.USER) private userService: IUserService) {}

  @ApiOperation({ summary: 'Create new user' })
  @ApiBody({ type: UserDto })
  @ApiResponse({ status: 200, description: 'Insert user to db' })
  @Post(Routes.CREATE)
  createUser(user: UserDto): Promise<User> {
    return this.userService.createUser(user);
  }
}
