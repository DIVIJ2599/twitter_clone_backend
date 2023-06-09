import JWT from "passport-jwt";
import User from "../models/user.js";
import dotenv from 'dotenv';

dotenv.config();

const JWTStrategy = JWT.Strategy;

const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY
};

export const passportAuth = (passport) => {
    passport.use(new JWTStrategy(opts,async (jwt_payload,done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user){
            return done(null,false);
        } else {
            return done(null,user);
        }
    }))
}
