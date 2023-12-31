import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { PrismaClient } from '../../prisma/generated/client'

const prisma = new PrismaClient()

const tRPC = initTRPC.create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;

export const appRouter = router({
  example: procedure.input(z.number()).query(async ({ input }) => {
    const res = await prisma.test.findFirst({
      where: {
        id: input
      }
    })
    return res;
  })
});

export type Router = typeof appRouter;
