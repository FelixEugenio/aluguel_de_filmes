import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/implementations/UsersReposity";

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);