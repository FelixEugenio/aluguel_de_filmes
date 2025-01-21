import { Request,Response } from "express";
import { CreateUserUseCases } from "./createUserUseCases";
import { container } from "tsyringe";
export class CreateUserController {
    async handle(req:Request, res:Response) {
        const {name,email, password} = req.body;

        const createUseCase = container.resolve(CreateUserUseCases);

        const user = await createUseCase.execute({name,email,password});

        return res.status(201).json(user);
    }
}   