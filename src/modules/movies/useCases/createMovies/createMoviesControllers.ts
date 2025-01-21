import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMoviesUseCases } from "./createMoviesUseCases";

export class CreateMoviesControllers {
    async handle(req: Request, res: Response) {
        const {name, description, daily_rate, fine_amount, available, genre_id} = req.body;

        const createMoviesUseCases = container.resolve(CreateMoviesUseCases);

        const movies = await createMoviesUseCases.execute({
            available,
            daily_rate,
            description,
            fine_amount,
            genre_id,
            name
        })

        return res.status(201).json(movies);
  }
}