import { swagger } from "@elysiajs/swagger";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { appRouter } from "./routers";

const app = new Elysia().use(swagger()).use(cors()).use(trpc(appRouter)).get("/", () => "Hello").listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
