import { ICreateUserDto } from "../../dtos/ICreateUsersDtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCases {
  constructor(
    private usersRepository:IUsersRepository
  ){}

  execute({ name, email, password }: ICreateUserDto) {
    const verifyIfUserAlreadyExists = this.usersRepository.findByEmail(email);
  }
}