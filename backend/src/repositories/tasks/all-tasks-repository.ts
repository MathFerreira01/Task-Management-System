import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allTasksRepository = async () => {
  return await prisma.task.findMany({
    include: {
      users: true,
    },
  });
};

export default allTasksRepository;
