import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const deleteTaskController = async (req: Request, res: Response) => {
  try {
    await prisma.task.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json({ message: "Task successfully deleted!!" });
  } catch (error) {
    return res.status(400).json({ message: "Error deleting task" });
  }
};

export default deleteTaskController;
