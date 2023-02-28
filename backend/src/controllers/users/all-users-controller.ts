import { Request, Response } from "express";
import allUsersServices from "../../services/users/all-users-service";

const allUsersController = async (req: Request, res: Response) => {
  const response = await allUsersServices();
  if (response.statusCode === 200) {
    return res.status(response.statusCode).json(response.body);
  }
  return res.status(response.statusCode).json(response.body);
};

export default allUsersController;
