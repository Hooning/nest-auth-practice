import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../users/src';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, PassportModule, JwtModule],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  exports: [AuthService],
})
export class AuthModule {}
