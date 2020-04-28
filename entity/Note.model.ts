import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany
} from "typeorm";

import { User } from "./User.model";
import { SharedNote } from "./SharedNote.model";

@Entity()
export class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    ownerId: number;
    @ManyToOne(() => User, user => user.notes)
    @JoinColumn({ name : "ownerId"})
    owner: User;

    @OneToMany(() => SharedNote, sharedNote => sharedNote.note)
    shares: SharedNote[];
}