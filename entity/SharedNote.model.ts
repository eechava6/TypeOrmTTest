import {
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    Entity
} from "typeorm";
import { User } from "./User.model";
import { Note } from "./Note.model";

@Entity()
export class SharedNote {
    
    @PrimaryColumn()
    targetId: number;
    @ManyToOne(() => User, user => user.receivedNotes)
    @JoinColumn({ name : "targetId"})
    target: User;

    @ManyToOne(() => User, user => user.sentNotes)
    @JoinColumn({ name : "senderId"})
    sender: User;

    @PrimaryColumn()
    noteId: number;
    @ManyToOne(() => Note, note => note.shares)
    @JoinColumn({ name : "noteId"})
    note: Note;
}