// import iceCreams from "@/data/iceCream.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  // const { minPrice, maxPrice } = getQuery(event);

  // let filteredIceCreams = iceCreams;

  // if (minPrice) {
  //   filteredIceCreams = filteredIceCreams.filter((iceCream) => {
  //     return iceCream.price >= parseInt(minPrice);
  //   });
  // }
  // if (maxPrice) {
  //   filteredIceCreams = filteredIceCreams.filter((iceCream) => {
  //     return iceCream.price <= parseInt(maxPrice);
  //   });
  // }
  return prisma.menu.findMany();
});
