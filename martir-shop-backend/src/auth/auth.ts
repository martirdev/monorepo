import Elysia from "elysia";
import { SESSION_COOKIE } from "./consts";
import { lucia } from "../shared/lucia";
import { makeSessionCookie } from "./utils";

export const auth = new Elysia()
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
  .get("/logout", async ({ set, cookie, headers }) => {
    if (!headers.referer) {
      throw new Error("Refferer not set");
    }

    await lucia.invalidateSession(cookie.session.value);
    const blankCookie = lucia.createBlankSessionCookie();

    set.status = 302;
    cookie[SESSION_COOKIE].set(makeSessionCookie(blankCookie));
    return (set.redirect = headers.referer);
  });
