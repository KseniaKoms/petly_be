import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/user.entity';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { IUserService } from 'src/modules/user/interfaces/IUserServices';
import { hashPassword } from 'src/utils/hashing';

@Injectable()
export class UserService implements IUserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async createUser(user: UserDto): Promise<User> {
    try {
      const password = await hashPassword(user.password);
      const newUser = await this.userRepository.create({ ...user, password });

      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
