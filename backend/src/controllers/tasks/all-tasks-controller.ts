import { Request, Response } from "express";
import allTasksService from "../../services/tasks/all-tasks-service";

const allTasksController = async (req: Request, res: Response) => {
  const response = await allTasksService();
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default allTasksController;
