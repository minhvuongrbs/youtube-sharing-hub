import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'jwt_secret_key',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
