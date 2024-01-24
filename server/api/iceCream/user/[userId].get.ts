import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface EventContextParams {
  userId?: string;
}

export default defineEventHandler((event) => {
  const { userId } = event.context.params as EventContextParams;

  return prisma.menu.findMany({
    where: {
      listerId: userId,
    },
    select: {
      id: true,
      name: true,
      price: true,
    },
  });
});
