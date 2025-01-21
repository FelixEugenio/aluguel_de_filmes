import { inject, injectable } from "tsyringe";
import { IGenresRepository } from "../../repositories/IGenresRepository";

@injectable()
export class ListGenresUseCases {
    constructor(
        @inject("GenresRepository")
        private genresRepository: IGenresRepository
    ) {}

    async execute() {
        const genres = await this.genresRepository.listAll();
        return genres
    }     
}