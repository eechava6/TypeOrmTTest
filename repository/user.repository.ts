import {EntityRepository, Repository} from "typeorm";
import {User} from "../entity/User.model";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    saveUser(name: string, age: number) {
        const user = new User();
        user.name = name;
        user.age = age;
        return this.manager.save(user);
    }

    findByName(name: string) {
        return this.manager.findOne(User, { name });
    }

}