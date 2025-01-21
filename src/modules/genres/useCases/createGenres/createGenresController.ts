import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGenreUseCase } from "./createGenreUseCase";
export class CreateGenreController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createGenreUseCase = container.resolve(CreateGenreUseCase);

        const genre = await createGenreUseCase.execute(name);

        return response.json(genre);
    }
}