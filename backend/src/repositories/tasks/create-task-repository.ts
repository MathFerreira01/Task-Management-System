import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTaskRepository = async (params: any) => {
  return await prisma.task.create({
    data: {
      name: params.name,
      description: params.description,
      date: new Date(),
    },
  });
};

export default createTaskRepository;