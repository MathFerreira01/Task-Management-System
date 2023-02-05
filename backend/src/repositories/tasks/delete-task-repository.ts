import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteTaskRepository = async (id: string) => {
  return await prisma.task.delete({
    where: {
      id: id,
    },
  });
};

export default deleteTaskRepository;
