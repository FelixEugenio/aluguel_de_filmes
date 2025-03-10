import { NextFunction,Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../../modules/users/implementations/UsersReposity";

interface Ipayload {
    sub:string
}
export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing",401);
    }

    const [ ,token] = authHeader.split(" ");

    const {sub: user_id} = verify(token, process.env.JWT_SECRET as string) as Ipayload;

   const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if(!user){
        throw new AppError("token is invalid!",401);
    }

    request.user = {
        id:user_id
    }

     next();
}