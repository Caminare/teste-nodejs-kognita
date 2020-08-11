import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
import { Base } from './Base'
import { Length } from 'class-validator';
import { IsValidCNPJ } from '../utilities/validCNPJ';


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
    @IsValidCNPJ('CNPJ', { message: 'CNPJ must be valid and must have 14 digits' })
    CNPJ: string;

    @Column()
    openDate: Date;

}
