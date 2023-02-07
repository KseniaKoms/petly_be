import { UserDto } from 'src/modules/user/dto/user.dto';
import { User } from 'src/database/user.entity';

export interface IUserService {
  createUser(user: UserDto): Promise<User>;
}
