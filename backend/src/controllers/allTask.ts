import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allTaskController = async (req: Request, res: Response) => {
  try {
    const taskData = await prisma.task.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return res.status(201).json(taskData);
  } catch (error) {
    return res.status(400).json({ msg: "Error Fetching Tasks" });
  }
};

export default allTaskController;
