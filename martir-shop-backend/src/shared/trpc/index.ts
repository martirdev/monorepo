import { initTRPC } from "@trpc/server";
import { PrismaClient } from "../../../prisma/generated/client";
import type { Context } from "./auth-context";

export { createContext } from "./auth-context";

export const prisma = new PrismaClient();

const migrate = async () => {
  const users = await prisma.user.findMany({
    include: {
      usersOnProjects: {
        include: {
          project: true,
        },
      },
    },
  });
  //   await prisma.$transaction(
  //     users.map((user) => {
  //       return prisma.user.update({
  //         where: {
  //           id: user.id,
  //         },
  //         data: {
  //           usersOnProjects: {
  //             create: {
  //               role: ["OWNER"],
  //               project: {
  //                 create: {
  //                   name: `Проект "${user.surname}"`,
  //                 },
  //               },
  //             },
  //           },
  //         },
  //       });
  //     })
  //   );

  const projectsByUser = users.reduce<Record<string, string>>((acc, user) => {
    acc[user.id] = user.usersOnProjects[0].project.id;
    return acc;
  }, {});

  const products = await prisma.product.findMany();
  const customers = await prisma.customer.findMany();
  const orders = await prisma.order.findMany();

  await prisma.$transaction([
    // change customers
    ...customers.map((customer) =>
      prisma.customer.update({
        where: {
          id: customer.id,
        },
        data: {
          project: {
            connect: {
              id: projectsByUser[customer.userId],
            },
          },
        },
      })
    ),
    // change products
    ...products.map((product) =>
      prisma.product.update({
        where: {
          id: product.id,
        },
        data: {
          project: {
            connect: {
              id: projectsByUser[product.userId],
            },
          },
        },
      })
    ),
    // change products
    ...orders.map((order) =>
      prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          project: {
            connect: {
              id: projectsByUser[order.userId],
            },
          },
        },
      })
    ),
  ]);
};

export const tRPC = initTRPC.context<Context>().create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;
