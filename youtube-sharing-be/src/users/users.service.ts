import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { transformPassword } from 'src/utils/passwordTransformation';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findOne(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async getUserInfo(user: any) {
    const { password, ...publicUserInfo } = await this.findOne(user.email);

    return publicUserInfo;
  }

  async addUser(user: UserEntity): Promise<UserEntity> {
    try {
      const hashedPassword = await transformPassword(user.password);
      const { password, ...newUser } = await this.userRepository.save({
        ...user,
        password: hashedPassword,
      });

      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
