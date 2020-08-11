import { getManager } from 'typeorm';
import { People } from '../entities/People';

const createPeople = async (companyName: string, fantasyName: string = '', CNPJ: string, openDate: Date) => {
    const peopleRepository = getManager().getRepository(People);
    const newPeople = new People();

    newPeople.companyName = companyName;
    newPeople.fantasyName = fantasyName;
    newPeople.CNPJ = CNPJ;
    newPeople.openDate = openDate;

    return await peopleRepository.save(newPeople);
};

const createMany = async (persons: People[]) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository.save(persons);
};

const findById = async (id: number) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository.findOne({ id });
};

const findMany = async (page: number, quantityPerPage: number) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository
        .createQueryBuilder('person')
        .skip((page - 1) * quantityPerPage)
        .take(quantityPerPage)
        .getMany();
};

const deleteOne = async (id: number) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository.delete({ id });
};

const deleteMany = async (ids: number[]) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository.delete(ids);
};

const updateOne = async (updatedPeople: People) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository.save(updatedPeople);
};

const updateMany = async (updatedPeoples: People[]) => {
    const peopleRepository = getManager().getRepository(People);
    return await peopleRepository.save(updatedPeoples);
};

export default {
    createPeople,
    createMany,
    findById,
    findMany,
    deleteOne,
    deleteMany,
    updateOne,
    updateMany
};