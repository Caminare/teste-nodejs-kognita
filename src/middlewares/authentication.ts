import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

export default (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl.indexOf('auth') === -1) {
    const token = <string>req.headers['auth'];
    let jwtPayload;
    
    try {
      jwtPayload = <any>jwt.verify(token, config.secret);
      res.locals.jwtPayload = jwtPayload;
    } catch (error) {
      res.status(401).send();
      return;
    }
  
    const { userId, username } = jwtPayload;
    const newToken = jwt.sign({ userId, username }, config.secret, {
      expiresIn: '1h'
    });
  
    res.setHeader('token', newToken);
  }

  next();
};
