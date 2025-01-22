import { Router } from "express";
import { CreateMoviesControllers } from "../modules/movies/useCases/createMovies/createMoviesControllers";
import asyncHandler from "../helpers/routes/exception/controllException";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";
import { ensureAdmin } from "../shared/middlewares/ensureAdmin";

const moviesRoutes = Router();

const createMoviesControllers = new CreateMoviesControllers();

moviesRoutes.post('/', ensureAuthenticated,ensureAdmin,asyncHandler(createMoviesControllers.handle));

export {moviesRoutes};