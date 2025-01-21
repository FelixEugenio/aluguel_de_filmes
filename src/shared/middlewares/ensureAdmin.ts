import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "../../modules/users/implementations/UsersReposity";
import { AppError } from "../../errors/AppError";
export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const user_id = request.user.id;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user.isAdmin) {
        throw new AppError("User isn't admin!",401);
    }

    return next();
}    