import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          return req?.cookies?.accessToken;
        },
      ]),
      secretOrKey: process.env.JWT_SECRET_KEY || 'i12*^(@G2315dsi2193T',
    });
  }

  async validate(payload: any) {
    return { id: payload.id, email: payload.email, role: payload.role , govUsername: payload.govUsername};
  }
}
