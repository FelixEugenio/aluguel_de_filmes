import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import asyncHandler from "../helpers/routes/exception/controllException";
import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

export const userRouter = Router();

userRouter.post('/', asyncHandler(createUserController.handle));
userRouter.post('/session', asyncHandler(authenticateUserController.handle));


