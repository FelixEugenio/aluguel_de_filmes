import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController";
import asyncHandler from "../helpers/routes/exception/controllException";
const createUserController = new CreateUserController();
export const userRouter = Router();

userRouter.post('/', asyncHandler(createUserController.handle));



