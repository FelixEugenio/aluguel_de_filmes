import { inject, injectable } from "tsyringe";
import { IGenresRepository } from "../../repositories/IGenresRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class CreateGenreUseCase {
    constructor(
        @inject("GenresRepository")
        private genresRepository: IGenresRepository
    ) {}

    async execute(name: string){

        const verifyIfGenreAlreadyExists = await this.genresRepository.findByName(name);

        if(!verifyIfGenreAlreadyExists) {
            throw new AppError("Genre already exists!");
        }

        const genre = await this.genresRepository.create(name);

        return genre
    }
}