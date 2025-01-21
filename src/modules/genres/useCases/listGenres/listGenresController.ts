import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGenresUseCases } from "./listGenresUseCases";
export class ListGenresController {
    async handle(request: Request, response: Response) {
        const listGenresUseCases = container.resolve(ListGenresUseCases);

        const genres = await listGenresUseCases.execute();
        return response.json(genres);
    }
}