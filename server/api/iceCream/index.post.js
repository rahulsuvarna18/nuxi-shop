// import Joi from "joi";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const schema = Joi.object({
//   name: Joi.string().required(),
//   description: Joi.string().min(10).required(),
//   price: Joi.number().required(),
//   listerId: Joi.string().required(),
// });

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);

//   const { error, value } = await schema.validate(body);

//   if (error) {
//     throw createError({
//       statusCode: 412,
//       statusMessage: error.message,
//     });
//   }

//   const { name, description, price, listerId } = body;

//   const item = await prisma.menu.create({
//     data: {
//       name,
//       description,
//       price,
//       listerId,
//     },
//   });

//   return item;
// });

import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
  listerId: Joi.string().required(),
  price: Joi.number().min(0).required(),
  name: Joi.string().required(),
  description: Joi.string().min(20).required(),
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error, value } = await schema.validate(body);

  if (error)
    throw createError({
      statusCode: 412,
      statusMessage: error.message,
    });

  const { name, price, description, listerId } = body;

  const car = await prisma.menu.create({
    data: {
      name,
      price,
      description,
      listerId,
    },
  });

  return car;
});
