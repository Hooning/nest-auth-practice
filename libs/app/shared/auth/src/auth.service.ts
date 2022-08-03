import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/src/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user && user?.password === pass) {
      const { password, ...result } = user;
      console.log('# validateUser - result: ', result);
      return result;
    }

    return null;
  }

  async login(user: any) {
    const loggedInUser = await this.validateUser(user.username, user.password);
    if (loggedInUser) {
      const payload = {
        username: loggedInUser.username,
        sub: loggedInUser.userId,
      };

      console.log('## Payload: ', payload);
      return {
        access_token: this.jwtService.sign(payload, {
          secret: 'secretKey123', // keep this as env variable
          expiresIn: '10s', // keep this as env variable
        }),
      };
    }
  }
}
