import { User } from "@prisma/client";
import { ICreateUserDto } from "../dtos/ICreateUsersDtos";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { prismaClient } from "../../../prisma";

export class UsersRepository implements IUsersRepository {
   async create({ name, email, password }: ICreateUserDto): Promise<User> {
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password,
                isAdmin: false
            }
        });

        return user;
    }
    
}    