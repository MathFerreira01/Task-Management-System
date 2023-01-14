import { Router } from "express";

import allTaskController from "../controllers/allTask";
import createTaskController from "../controllers/createTask";
import deleteTaskController from "../controllers/deleteTask";
import updateTaskController from "../controllers/updateTask";

const router = Router();

router
  .get("/tasks", allTaskController)
  .post("/tasks", createTaskController)
  .put("/tasks/:id", updateTaskController)
  .delete("/tasks/:id", deleteTaskController);

export { router };
