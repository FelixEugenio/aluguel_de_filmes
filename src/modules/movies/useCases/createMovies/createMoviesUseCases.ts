import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { ICreateMoviesDtos } from "../../dtos/ICreateMoviesDtos";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class CreateMoviesUseCases {
    constructor(
        @inject("MoviesRepository")
        private moviesRepository: IMoviesRepository
    ){}

    async execute({ name, description, daily_rate, fine_amount, available, genre_id }: ICreateMoviesDtos) {

        const verifyIfMovieAlreadyExists = await this.moviesRepository.findByName(name);

         if(verifyIfMovieAlreadyExists) {
             throw new AppError("Movie already exists");
         }

        const movie = await this.moviesRepository.create({
            name,
            description,
            daily_rate,
            fine_amount,
            available,
            genre_id
        })
        return movie
    }

}