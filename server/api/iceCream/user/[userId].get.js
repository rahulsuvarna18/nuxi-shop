import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const { userId } = event.context.params;

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
