import { initTRPC } from "@trpc/server";
import { PrismaClient } from "../../../prisma/generated/client";

export const prisma = new PrismaClient();

export const tRPC = initTRPC.create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;
