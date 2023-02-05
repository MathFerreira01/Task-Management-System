import { Request, Response } from "express";
import deleteTaskService from "../../services/tasks/delete-task-service";

const deleteTaskController = async (req: Request, res: Response) => {
  const response = await deleteTaskService(req.params.id);
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default deleteTaskController;
