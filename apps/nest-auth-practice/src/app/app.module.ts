import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from '../../../../libs/app/shared/auth/src/auth.module';
import { UsersModule } from '../../../../libs/app/shared/users/src';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../../../../libs/app/shared/auth/src/constants';
import { LocalStrategy } from '../../../../libs/app/shared/auth/src/local.strategy';
import { JwtStrategy } from '../../../../libs/app/shared/auth/src/jwt.strategy';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '5s' }, // does not get expired
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, JwtStrategy],
})
export class AppModule {}
