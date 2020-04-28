import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    OneToMany
} from "typeorm";
import {Note} from "./Note.model";
import {SharedNote} from "./SharedNote.model";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
    
    @OneToMany(() => Note, note => note.owner)
    notes: Note[];

    @OneToMany(() => SharedNote, sharedNote => sharedNote.target)
    receivedNotes: Note[];

    @OneToMany(() => SharedNote, sharedNote => sharedNote.sender)
    sentNotes: Note[];
}
