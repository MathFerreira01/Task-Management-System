import { Router } from "express";
import createTaskController from "../controllers/tasks/create-task-controller";

const routeTask = Router();

routeTask.post("/tasks", createTaskController);
export { routeTask };
