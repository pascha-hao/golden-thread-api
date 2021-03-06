import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user';
import { Login } from '../models/login';
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createUser(user: User): Promise<User>;
    getAllUsers(): Promise<Array<User>>;
    findUsersById(id: number): Promise<User>;
    getDonationsByUserId(userId: number, dateFrom: Date): Promise<void>;
    login(login: Login): Promise<User | "ERROR">;
}
