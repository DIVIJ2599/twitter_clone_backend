import express from 'express';
import {connect} from './config/database.js'
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
import User from "./models/user.js"
import Tweet from './models/tweet.js';
import { toggleLike } from './service/like-service.js';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(passport.initialize());
passportAuth(passport);

app.use('/api/v1',apiRoutes)


app.listen(3000,async ()=>{
    console.log('Server Running at Port 3000')
    await connect();
    console.log('MongoDB Connected')
})