import { Movie } from "@prisma/client";
import { ICreateMoviesDtos } from "../dtos/ICreateMoviesDtos";
import { IMoviesRepository } from "../repositories/IMoviesRepository";
import { prismaClient } from "../../../prisma";

export class MoviesRepository implements IMoviesRepository {
  listAll(): Promise<Movie[]> {
      const movies = prismaClient.movie.findMany();
      return movies as Promise<Movie[]>
  }
  findById(id: string): Promise<Movie> {
      const movie = prismaClient.movie.findUnique({
          where: {
              id
          }
      })
      return movie as Promise<Movie>
  }
  async  create({ name, description, daily_rate, fine_amount, available, genre_id }: ICreateMoviesDtos): Promise<Movie> {
        const movie = await prismaClient.movie.create({
            data: {
                name,
                description,
                daily_rate,
                fine_amount,
                available,
                genre_id
            }
        })

        return movie 
    }
  async  findByName(name: string): Promise<Movie> {
        const movie = await prismaClient.movie.findFirst({
            where: {
                name
            }
        })

        return movie as Movie
    }
       
}