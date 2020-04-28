import {EntityRepository, Repository} from "typeorm";
import {Note} from "../entity/Note.model";

@EntityRepository(Note)
export class NoteRepository extends Repository<Note>{

    saveNote(content: string, ownerId: number) {
        const note = new Note();
        note.content = content;
        note.ownerId = ownerId;
        return this.manager.save(note);
    }

    findById(ownerId: number) {
       return this.manager.findOne(Note, { ownerId });
    }

}