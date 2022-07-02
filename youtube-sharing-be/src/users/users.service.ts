import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async addUser(user: UserEntity): Promise<UserEntity> {
    const { password, ...newUser } = await this.userRepository.save(user);
    return newUser;
  }
}
