import { Movie } from "@prisma/client"
import { ICreateMoviesDtos } from "../dtos/ICreateMoviesDtos"

export interface IMoviesRepository {
    create({name, description, daily_rate, fine_amount, available, genre_id}: ICreateMoviesDtos): Promise<Movie>
    findByName(name: string): Promise<Movie>
    listAll(): Promise<Movie[]>
    findById(id: string): Promise<Movie>
}