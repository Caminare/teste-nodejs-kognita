import IController from '../interfaces/IController';
import peopleService from '../services/people.service';
import { Any } from 'typeorm';

const create: IController = async(req, res) => {
    let people;
    try {
        people = await peopleService.createPeople(req.body.companyName, req.body.fantasyName, req.body.CNPJ, req.body.openDate);
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

        return;
    };

    if (people) {
        res.status(200);
        res.json({ people, success: true });
    } else {
        res.status(400);
        res.json({
            error: {
                message:'An error ocurred while attempting to create a person.'
            },
            success: false
        });
    };
};

const createMany: IController = async(req, res) => {
    let peoples;
    try {
        peoples = await peopleService.createMany(req.body.persons);
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

        return;
    };

    if (peoples) {
        res.status(200);
        res.json({ peoples, success: true });
    } else {
        res.status(400);
        res.json({
            error: {
                message:'An error ocurred while attempting to create a person.'
            },
            success: false
        });
    };
};

const findOne: IController = async(req, res) => {
    let people = {};
    try {
        people = await peopleService.findById(parseInt(req.params.id));
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

    };

    res.status(200);
    res.json({ people, success: true });
};

const findMany: IController = async(req, res) => {
    let peoples = [];
    let page = <string>req.query.page || '1';
    let quantityPerPage = <string>req.query.quantityPerPage || '10';
    try {
        peoples = await peopleService.findMany(parseInt(page), parseInt(quantityPerPage));
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

    };

    res.status(200);
    res.json({ peoples, success: true });
};

const deleteOne: IController = async(req, res) => {
    try {
        await peopleService.deleteOne(parseInt(req.params.id));
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

    };

    res.status(200);
    res.json({ message: 'The user was succesfully deleted', success: true });
};


const deleteMany: IController = async(req, res) => {
    try {
        await peopleService.deleteMany(req.body.ids);
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

    };

    res.status(200);
    res.json({ message: 'The users were succesfully deleted', success: true });
};

const updateOne: IController = async(req, res) => {
    let people;
    try {
        people = await peopleService.updateOne(req.body);
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

    };

    res.status(200);
    res.json({ people, success: true });
};

const updateMany: IController = async(req, res) => {
    let peoples = [];
    try {
        peoples = await peopleService.updateMany(req.body.peoples);
    } catch (error) {
        res.status(400);
        res.json({
            error: {
                message: error.message
            },
            success: false
        });

    };

    res.status(200);
    res.json({ peoples, success: true });
};

export default {
    create,
    createMany,
    findOne,
    findMany,
    deleteOne,
    deleteMany,
    updateOne,
    updateMany
};