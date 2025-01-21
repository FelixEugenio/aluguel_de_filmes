import { Router } from "express";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { CreateGenreController } from "../modules/genres/useCases/createGenres/createGenresController";
import asyncHandler from "../helpers/routes/exception/controllException";

const createGenreController = new CreateGenreController();

export const genresRouter = Router();

genresRouter.post('/', ensureAuthenticated,ensureAdmin, asyncHandler(createGenreController.handle));