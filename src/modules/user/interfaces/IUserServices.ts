import { User } from 'src/database/user.entity';
import { UserDto } from 'src/modules/user/dto/user.dto';

export interface IUserService {
  createUser(user: UserDto): Promise<User>;
}
