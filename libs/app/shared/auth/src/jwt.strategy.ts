import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../src/constants';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret, // keep this as env variable
    });
  }

  async validate(payload: any) {
    console.log('[JwtStrategy - validate] - payload: ', payload);
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
