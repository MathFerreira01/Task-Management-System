import { Request, Response } from "express";
import updateTaskService from "../../services/tasks/update-task-service";

const updateTaskController = async (req: Request, res: Response) => {
  const response = await updateTaskService(req.params.id, req.body);

  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default updateTaskController;
