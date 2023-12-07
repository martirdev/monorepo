import { swagger } from "@elysiajs/swagger";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import { router } from "./routers";

new Elysia().use(swagger()).use(trpc(router)).listen(8080);
