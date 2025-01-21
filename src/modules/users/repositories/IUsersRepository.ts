import { ICreateUserDto } from "../dtos/ICreateUsersDtos"
import {User} from '@prisma/client'
export interface IUsersRepository {
    create({name,email,password}:ICreateUserDto):Promise<User>
    findByEmail(email:string):Promise<User>
}