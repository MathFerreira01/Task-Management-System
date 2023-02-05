import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateTaskRepository = async (id: string, params: any) => {
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: {
        name: params.name,
        description: params.description,
        date: new Date(),
        userID: params.userID,
    },
    include: {
      users: true,
    },
  });
};

export default updateTaskRepository;
