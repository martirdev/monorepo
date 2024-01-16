import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { PrismaClient } from "../../prisma/generated/client";
import { cryptString } from "../utils/converters";

const prisma = new PrismaClient();

const tRPC = initTRPC.create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;

export const appRouter = router({
  getMarketplaceKeys: procedure.query(async () => {
    return await prisma.marketplaceKey.findMany({
      select: {
        encrypted_api_key: true,
        id: true,
        places: true,
        type: true,
      },
    });
  }),
  setMarketplaceKey: procedure
    .input(
      z.object({
        apiKey: z.string(),
        type: z.enum(["ozon", "ym"]),
      })
    )
    .query(async ({ input }) => {
      // TODO: Need to load places from MP API
      return await prisma.marketplaceKey.create({
        data: {
          api_key: input.apiKey,
          encrypted_api_key: cryptString(input.apiKey),
          type: input.type,
        },
      });
    }),
  removeMarkeplaceKey: procedure.input(z.string()).query(async ({ input }) => {
    return await prisma.marketplaceKey.delete({
      where: {
        id: input,
      },
      include: {
        places: true,
      },
    });
  }),
});

export type Router = typeof appRouter;
