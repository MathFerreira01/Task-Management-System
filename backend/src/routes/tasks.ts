import { Router } from "express";
import allTasksController from "../controllers/tasks/all-tasks-controller";
import createTaskController from "../controllers/tasks/create-task-controller";
import updateTaskController from "../controllers/tasks/update-task-controller";

const routeTask = Router();

routeTask

  .post("/task", createTaskController)
  .get("/task", allTasksController)
  .put("/task/:id", updateTaskController);

export { routeTask };
