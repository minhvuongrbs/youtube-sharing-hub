import { UserEntity } from './../users/user.entity';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { isMatchPassword } from './../utils/passwordTransformation';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) return null;
    const isValidPassword = await isMatchPassword({
      password,
      hash: user.password,
    });
    if (isValidPassword) {
      const { password: hashPassword, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: UserEntity) {
    const payload = { email: user.email, userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
      data: payload,
    };
  }
}
