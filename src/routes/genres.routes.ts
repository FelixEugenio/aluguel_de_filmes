import { Router } from "express";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";
import { CreateGenreController } from "../modules/genres/useCases/createGenres/createGenresController";
import { ListGenresController } from "../modules/genres/useCases/listGenres/listGenresController";
import asyncHandler from "../helpers/routes/exception/controllException";

const createGenreController = new CreateGenreController();
const listGenresController = new ListGenresController();

export const genresRouter = Router();

genresRouter.post('/', ensureAuthenticated,ensureAdmin, asyncHandler(createGenreController.handle));
genresRouter.get('/', ensureAuthenticated, asyncHandler(listGenresController.handle));