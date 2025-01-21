import { Router } from "express";
import { userRouter } from "./users.routes";
import { genresRouter } from "./genres.routes";

const routes = Router();

routes.use('/users',userRouter);
routes.use('/genres',genresRouter);

export {routes}