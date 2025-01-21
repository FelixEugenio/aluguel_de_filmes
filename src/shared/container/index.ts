import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/implementations/UsersReposity";
import { GenresRepository } from "../../modules/genres/implementations/GenresRepository";
import { IGenresRepository } from "../../modules/genres/repositories/IGenresRepository";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<IGenresRepository>("GenresRepository", GenresRepository);