import IController from '../interfaces/IController';
import userService from '../services/user.service';
import { generateToken } from '../utilities/encryptUtils';


const login: IController = async(req, res) => {
    const user = await userService.login(req.body.email, req.body.password);

    if (user) {
        const token = await generateToken(user);
        res.status(200);
        res.json({ token, success: true });
    } else {
        res.status(400);
        res.json({
            error: {
                message:'Invalid credentials.'
            },
            success: false
        });
    };

};


const register: IController = async(req, res) => {
    let user;
    try {
        user = await userService.register(req.body.email, req.body.password, req.body.name);
    } catch (error) {
        if (error.code == 'ER_DUP_ENTRY') {
            res.status(400);
            res.json({
                error: {
                    message:'This e-mail already exists.'
                },
                success: false
            });
        };

        return;
    };

    if (user) {
        const token = await generateToken(user);
        res.status(200);
        res.json({ token, success: true });
    } else {
        res.status(400);
        res.json({
            error: {
                message:'An error ocurred while attempting to create a user.'
            },
            success: false
        });
    };
};

export default {
    login,
    register
};