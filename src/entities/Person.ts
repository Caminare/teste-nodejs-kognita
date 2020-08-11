import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { Base } from './Base'
import { Validate, validateOrReject, MinLength, MaxLength } from 'class-validator';
import CNPJValidator from '../utilities/validCNPJ';


@Entity()
export class Person extends Base {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    companyName: string;

    @Column({ default: '' })
    fantasyName: string;

    @Column()
    @MinLength(14)
    @MaxLength(18)
    @Validate(CNPJValidator)
    CNPJ: string;

    @Column()
    openDate: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        await validateOrReject(this);
    }

}
