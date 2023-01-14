import { Router } from "express";
import allTaskController from "../controllers/allTask";
import createTaskController from "../controllers/createTask";

const router = Router()

router
    .get('/tasks', allTaskController)
    .post('/tasks', createTaskController)

export { router };