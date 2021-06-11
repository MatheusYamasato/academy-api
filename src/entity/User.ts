import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    constructor(name: string, email: string, password: string, apartment: number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.apartment = apartment;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    apartment: number;

}
