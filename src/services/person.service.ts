import { getManager } from 'typeorm';
import { Person } from '../entities/Person';

const createPerson = async (companyName: string, fantasyName: string = '', CNPJ: string, openDate: Date) => {
    const personRepository = getManager().getRepository(Person);
    const newPerson = new Person();

    newPerson.companyName = companyName;
    newPerson.fantasyName = fantasyName;
    newPerson.CNPJ = CNPJ;
    newPerson.openDate = openDate;

    return await personRepository.save(newPerson);
};

const createMany = async (persons: Person[]) => {
    const personRepository = getManager().getRepository(Person);

    let personsToInsert = persons.map(p => (personRepository.create(p)));

    return await personRepository.save(personsToInsert);
};

const findById = async (id: number) => {
    const personRepository = getManager().getRepository(Person);
    return await personRepository.findOne({ id });
};

const findMany = async (page: number, quantityPerPage: number) => {
    const personRepository = getManager().getRepository(Person);
    return await personRepository
        .createQueryBuilder('person')
        .skip((page - 1) * quantityPerPage)
        .take(quantityPerPage)
        .getMany();
};

const deleteOne = async (id: number) => {
    const personRepository = getManager().getRepository(Person);
    return await personRepository.delete({ id });
};

const deleteMany = async (ids: number[]) => {
    const personRepository = getManager().getRepository(Person);
    return await personRepository.delete(ids);
};

const updateOne = async (updatedPerson: Person) => {
    const personRepository = getManager().getRepository(Person);

    let personToUpdate = personRepository.create(updatedPerson);

    return await personRepository.save(personToUpdate);
};

const updateMany = async (updatedPersons: Person[]) => {
    const personRepository = getManager().getRepository(Person);

    let personsToUpdate = updatedPersons.map(p => (personRepository.create(p)));

    return await personRepository.save(personsToUpdate);
};

export default {
    createPerson,
    createMany,
    findById,
    findMany,
    deleteOne,
    deleteMany,
    updateOne,
    updateMany
};