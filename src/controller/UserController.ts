import { getManager } from "typeorm";
import { User } from "../entity/User";

export class UserController {
    
    async insertUser(user: User) {
        const userInserted = await getManager().save(user)
        return userInserted
    }

    async getUsers() {
        const users = await getManager().find(User)
        return users
    }
}