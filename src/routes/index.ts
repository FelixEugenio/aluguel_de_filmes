import { Router } from "express";
import { userRouter } from "./users.routes";
import { genresRouter } from "./genres.routes";
import { moviesRoutes } from "./movies.routes";

const routes = Router();

routes.use('/users',userRouter);
routes.use('/genres',genresRouter);
routes.use('/movies',moviesRoutes);

export {routes}