import { Genre } from "@prisma/client";
import { IGenresRepository } from "../repositories/IGenresRepository";
import { prismaClient } from "../../../prisma";

export class GenresRepository implements IGenresRepository{
  listAll(): Promise<Genre[]> {
      const genres = prismaClient.genre.findMany();

      return genres as Promise<Genre[]>;
  }
async findByName(name: string): Promise<Genre> {
      const genre = prismaClient.genre.findFirst({
          where: {name}
      });

      return genre as Promise<Genre>;
  }

  async create(name: string): Promise<Genre> {
        const genre = await prismaClient.genre.create({
            data: {
                name
            }
        });

        return genre;
    }
}

