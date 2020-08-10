import { getManager } from 'typeorm';
import { User } from '../entities/User';
import { generateHash, validateHash } from '../utilities/encryptUtils';

const findUser = async (email: string) => {
    const userRepository = getManager().getRepository(User);

    try {
       return await userRepository.findOne({ email });
    } catch (error) {
        return null;
    };
};

const register = async (email: string, pass: string, name: string) => {
    const userRepository = getManager().getRepository(User);
    
    const newUser = new User();
    newUser.email = email;
    newUser.password = await generateHash(pass);
    newUser.name = name;
    
    const { password, ...userData } = await userRepository.save(newUser);

    return userData;
  };

const login = async (email: string, password: string) => {
    const user = await findUser(email);
    if (user) {
      if (await validateHash(password, user.password)) {
        return user;
      };
    };
    return null;
  };
  
  
export default {
    register,
    login
};