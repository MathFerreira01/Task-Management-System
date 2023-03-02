import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTaskRepository = async (params: any) => {
  return await prisma.task.create({
    data: {
      name: params.name,
      description: params.description,
      date: params.date,
      userID: params.userID,
    },
    include: {
      users: true,
    },
  });
};

export default createTaskRepository;
