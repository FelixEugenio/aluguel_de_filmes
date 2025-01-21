import { inject, injectable } from "tsyringe";
import { IAuthenticateUserDto } from "../../dtos/ICreateUsersDtos";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IResponse {
    user: {
        email: string;
        name:string
    },

    token:string
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IAuthenticateUserDto) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect!",404);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!");
        }

        const token = sign({},process.env.JWT_SECRET as string, {
            subject: user.id,
            expiresIn: "1d"
        })

       const tokenResponse:IResponse = {
           user: {
               name: user.name,
               email
           },
           token
       }

       return tokenResponse

    }
}