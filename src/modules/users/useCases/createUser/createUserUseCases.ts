import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCases {
  constructor(
    private usersRepository:IUsersRepository
  ){}
}