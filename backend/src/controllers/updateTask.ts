import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const updateTaskController = async (req: Request, res: Response) => {
  try {
    await prisma.task.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        description: req.body.description,
      },
    });
    return res.status(201).json({ message: "Task successfully updated!!" });
  } catch (error) {
    return res.status(400).json({ error, message: "Error updating task" });
  }
};

export default updateTaskController;