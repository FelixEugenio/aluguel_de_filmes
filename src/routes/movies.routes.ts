import { Router } from "express";
import { CreateMoviesControllers } from "../modules/movies/useCases/createMovies/createMoviesControllers";
import asyncHandler from "../helpers/routes/exception/controllException";

const moviesRoutes = Router();

const createMoviesControllers = new CreateMoviesControllers();

moviesRoutes.post('/', asyncHandler(createMoviesControllers.handle));

export {moviesRoutes};