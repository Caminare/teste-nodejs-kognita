import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes/index.route';
import authenticate from './middlewares/authentication';
import config from './config/config';

createConnection().then(async connection => {
    const app = express();

    app.use(bodyParser.json());
    app.use(authenticate);
    app.use(router)

    app.listen(config.port);

    console.log('Listening on port 3000');

}).catch(error => console.log(error));
