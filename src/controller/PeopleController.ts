import IController from '../interfaces/IController';
import personService from '../services/person.service';

const create: IController = async (req, res) => {
    let person;
    try {
        person = await personService.createPerson(req.body.companyName, req.body.fantasyName, req.body.CNPJ, req.body.openDate);
    } catch (error) {
        res.status(400);
        res.json({
            error,
            success: false
        });

        return;
    };

    if (person) {
        res.status(200);
        res.json({ person, success: true });
    } else {
        res.status(400);
        res.json({
            error: {
                message: 'An error ocurred while attempting to create a person.'
            },
            success: false
        });
    };
};

const createMany: IController = async (req, res) => {
    let persons;
    try {
        persons = await personService.createMany(req.body.persons);
    } catch (error) {
        res.status(400);
        res.json({
            error,
            success: false
        });

        return;
    };

    if (persons) {
        res.status(200);
        res.json({ persons, success: true });
    } else {
        res.status(400);
        res.json({
            error: {
                message: 'An error ocurred while attempting to create a person.'
            },
            success: false
        });
    };
};

const findOne: IController = async (req, res) => {
    let person = {};
    try {
        person = await personService.findById(parseInt(req.params.id));
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
    res.json({ person, success: true });
};

const findMany: IController = async (req, res) => {
    let persons = [];
    let page = <string>req.query.page || '1';
    let quantityPerPage = <string>req.query.quantityPerPage || '10';
    try {
        persons = await personService.findMany(parseInt(page), parseInt(quantityPerPage));
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
    res.json({ persons, success: true });
};

const deleteOne: IController = async (req, res) => {
    try {
        await personService.deleteOne(parseInt(req.params.id));
    } catch (error) {
        res.status(400);
        res.json({
            error,
            success: false
        });

    };

    res.status(200);
    res.json({ message: 'The user was succesfully deleted', success: true });
};


const deleteMany: IController = async (req, res) => {
    try {
        await personService.deleteMany(req.body.ids);
    } catch (error) {
        res.status(400);
        res.json({
            error,
            success: false
        });

    };

    res.status(200);
    res.json({ message: 'The users were succesfully deleted', success: true });
};

const updateOne: IController = async (req, res) => {
    let person;
    try {
        person = await personService.updateOne(req.body);
    } catch (error) {
        res.status(400);
        res.json({
            error,
            success: false
        });

    };

    res.status(200);
    res.json({ person, success: true });
};

const updateMany: IController = async (req, res) => {
    let persons = [];
    try {
        persons = await personService.updateMany(req.body.persons);
    } catch (error) {
        res.status(400);
        res.json({
            error,
            success: false
        });

    };

    res.status(200);
    res.json({ persons, success: true });
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