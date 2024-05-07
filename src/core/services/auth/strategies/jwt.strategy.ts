import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

import { jwtConstants } from "../constants";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret
        })
    }
    async validate(payload: any) {
        return { id: payload.sub, email: payload.email };
    }
}