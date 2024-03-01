import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import { auth } from "./auth/auth";
import { yandexAuth } from "./auth/yandex";
import { appRouter } from "./routers";
import { createContext } from "./shared/trpc";

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .use(auth)
  .use(yandexAuth)
  .use(
    trpc(appRouter, {
      createContext,
    })
  )
  .get("/ping", () => "pong")
  .listen(8080);

console.log(
  `martir-shop is running at http://${app.server?.hostname}:${app.server?.port}`
);
