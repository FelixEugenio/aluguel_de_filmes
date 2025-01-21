import { inject, injectable } from "tsyringe";
import { ICreateUserDto } from "../../dtos/ICreateUsersDtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCases {
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUsersRepository
  ){}

 async execute({ name, email, password }: ICreateUserDto) {
    const verifyIfUserAlreadyExists = await this.usersRepository.findByEmail(email);

    if(verifyIfUserAlreadyExists){
        throw new Error("User already exists");
    }

    const user = await this.usersRepository.create({
        name,
        email,
        password
    })

    return user;
  }
}