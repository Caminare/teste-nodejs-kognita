import { User } from '../entities/User';
import config from '../config/config';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateHash = async (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 8,  (err: any, hash: string) => {
      if (!err) {
        resolve(hash);
      }
      reject(err);
    });
  });

const validateHash = async (password: string, hash: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hash,  (err: any, result: string) => {
      if (result) {
        resolve(true);
      }
      resolve(false);
    });
  });


  const generateToken = async (user: User) => {
    const { password, ...userData } = user;
    return await jwt.sign(userData, config.secret, { expiresIn: 60 * 60 });
  };
  
  const validateToken = async (token: string): Promise<any> =>
    new Promise((resolve) => {
      jwt.verify(token, config.secret, (err: Error, decoded: any) => {
        if (err) {
          resolve(null);
        } else {
          resolve(decoded);
        }
      });
    });
  

  export {
      generateHash,
      validateHash,
      generateToken,
      validateToken
  };