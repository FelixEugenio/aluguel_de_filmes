import { Request,Response } from "express";
import { CreateUserUseCases } from "./createUserUseCases";
import { UsersRepository } from "../../implementations/UsersReposity";

const usersRepository = new UsersRepository();
export class CreateUserController {
    async handle(req:Request, res:Response) {
        const {name,email, password} = req.body;

        const createUseCase = new CreateUserUseCases(usersRepository);

        const user = await createUseCase.execute({name,email,password});

        return res.status(201).json(user);
    }
}   