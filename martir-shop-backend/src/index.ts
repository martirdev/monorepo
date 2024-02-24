import { swagger } from "@elysiajs/swagger";
import { trpc } from "@elysiajs/trpc";
import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { appRouter } from "./routers";
import { yandexAuth } from "./auth/yandex";
import { lucia } from "./shared/lucia";

const app = new Elysia()
  .use(swagger())
  .use(cors())
  .use(yandexAuth)
  .use(trpc(appRouter))
  .get("/me", async ({ set, headers, cookie }) => {
    if (!headers.authorization || !/Bearer .+/gm.test(headers.authorization)) {
      return {};
    }

    const sessionId = lucia.readBearerToken(headers.authorization ?? "");
    if (!sessionId) {
      set.status = 401;
      return {};
    }

    const { user, session } = await lucia.validateSession(sessionId);
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookie.auth_session.set({
        ...sessionCookie.attributes,
        value: sessionCookie.value,
      });
    }

    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookie.auth_session.set({
        ...sessionCookie.attributes,
        value: sessionCookie.value,
      });
    }
    return user;
  })
  .get("/ping", () => "pong")
  .listen(8080);

console.log(
  `martir-shop is running at http://${app.server?.hostname}:${app.server?.port}`
);
