import { initTRPC } from "@trpc/server";
import { exampleRouter } from "./example";

export const tRPC = initTRPC.create();

export const router = tRPC.router({
  example: exampleRouter,
});

export type Router = typeof router;
