import { initTRPC } from "@trpc/server";
import { PrismaClient } from "../../../prisma/generated/client";
import type { Context } from "./auth-context";

export { createContext } from "./auth-context";

export const prisma = new PrismaClient();

export const tRPC = initTRPC.context<Context>().create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;
