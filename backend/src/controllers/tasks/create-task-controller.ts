import { Request, Response } from "express";
import createTaskService from "../../services/tasks/create-task-service";


const createTaskController = async (req: Request, res: Response) => {
  const response = await createTaskService(req.body);

  if (response.statusCode === 201) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default createTaskController;