import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createTaskController = async (req: Request, res: Response) => {
  try {
    await prisma.task.create({
      data: {
        name: req.body.name,
        description: req.body.description,
      },
    });

    return res
      .status(201)
      .json({ message: "Task Registration successfully Completed!" });
  } catch (error) {
    return res.status(400).json({ message: "Unsuccessful Task Registration" });
  }
};

export default createTaskController;