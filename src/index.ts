import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import router from './routes/index.route';
import authenticate from './middlewares/authentication';

createConnection().then(async connection => {
    const app = express();

    app.use(bodyParser.json());
    app.use(authenticate);
    app.use(router)

    app.listen(3000);

    console.log('Listening');

}).catch(error => console.log(error));
