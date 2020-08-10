import {Entity, PrimaryGeneratedColumn, Column, Unique} from 'typeorm';
import { Base } from './Base'
import { Length } from 'class-validator';


@Entity()
export class People extends Base {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    companyName: string;

    @Column({ default: '' })
    fantasyName: string;

    @Column()
    @Length(14)
    CNPJ: string;

    @Column()
    openDate: Date;

}
