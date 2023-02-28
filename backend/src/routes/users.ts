import { Router } from "express";
import allUsersController from "../controllers/users/all-users-controller";

const routeUser = Router();

routeUser.get("/users", allUsersController);

export { routeUser };
