import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface EventContextParams {
  listingId?: number;
}

export default defineEventHandler((event) => {
  const { listingId } = event.context.params as EventContextParams;

  if (listingId === undefined) {
    throw new Error("listingId is undefined");
  }

  return prisma.menu.delete({
    where: {
      id: parseInt(listingId.toString()),
    },
  });
});
