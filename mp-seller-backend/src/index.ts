import { swagger } from "@elysiajs/swagger";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { appRouter } from "./routers";

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .use(trpc(appRouter))
  .get("/ping", () => "pong")
  .listen(8080);

console.log(
  `mp-seller-backend is running at http://${app.server?.hostname}:${app.server?.port}`
);
