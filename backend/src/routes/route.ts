import { Router } from "express";
import allTaskController from "../controllers/allTask";
import createTaskController from "../controllers/createTask";
import updateTaskController from "../controllers/updateTask";

const router = Router();

router
  .get("/tasks", allTaskController)
  .post("/tasks", createTaskController)
  .put("/tasks/:id", updateTaskController);

export { router };
