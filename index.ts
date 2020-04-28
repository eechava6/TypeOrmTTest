import "reflect-metadata";
import {createConnection,getRepository} from "typeorm";
import {UserRepository} from "./repository/user.repository";
import {NoteRepository} from "./repository/note.repository";
import * as express from "express";
import * as bodyParser from "body-parser";

createConnection().then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    app.listen(3000);
    
    const userRepo = connection.getCustomRepository(UserRepository);
    const NoteRepo = connection.getCustomRepository(NoteRepository);

    let User = await userRepo.saveUser('Esteban',10);
    let Note = await NoteRepo.saveNote("Hello world!", User.id);
    
    console.log(Note);
    
    let notes = await NoteRepo.findById(User.id);
    console.log(notes);
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");
}).catch(error => console.log(error));
