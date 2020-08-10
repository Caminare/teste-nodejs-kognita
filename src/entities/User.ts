import {Entity, PrimaryGeneratedColumn, Column, Unique} from 'typeorm';
import { Base } from './Base'
import { IsEmail, Length} from 'class-validator';



@Entity()
export class User extends Base {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column()
    @Unique(['email'])
    @IsEmail()    
    email: string;

    @Column()
    name: string;

    @Column()
    @Length(8,24)
    password: string;

}
