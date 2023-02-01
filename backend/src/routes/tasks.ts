import { Router } from "express";
import allTasksController from "../controllers/tasks/all-tasks-controller";
import createTaskController from "../controllers/tasks/create-task-controller";

const routeTask = Router();

routeTask

  .post("/tasks", createTaskController)
  .get("/tasks", allTasksController);

export { routeTask };
