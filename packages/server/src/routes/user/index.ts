import { Effect } from "effect";
import { Hono } from "hono";
import { omit } from "lodash";
import { format } from "url";
import { eq } from "drizzle-orm";

import { createUserSession, lucia, validateAuthCookie } from "../../lib/auth";
import { logEffectError } from "../../lib/effect";
import { oauth } from "../../middleware/oauth";

import {
  createUserIfNotExist,
  getUserFromDBByYandexId,
  getUserYandexInfo,
} from "./yandex";
import { db } from "../../lib/db";
import {
  organizations,
  permissions,
  usersToOrganizations,
  usersToPermissions,
} from "../../scheme";
import { setCookie } from "hono/cookie";

export const user = new Hono()
  .use(
    oauth((req) => [
      process.env.YANDEX_CLIENT_ID,
      process.env.YANDEX_CLIENT_SECRET,
      {
        redirectURI: req.query("redirect") ?? "",
      },
    ])
  )
  .get("/", (c) => c.get("oauth").redirect())
  .get("/callback", async (c) => {
    const tokens = await c.get("oauth").authorize();

    const rawQuery = await getUserYandexInfo(tokens.accessToken).pipe(
      Effect.andThen(getUserFromDBByYandexId),
      Effect.andThen(createUserIfNotExist),
      Effect.tap(createUserSession(c)),
      Effect.catchAll(logEffectError),
      Effect.runPromise
    );

    const query = omit(rawQuery, "id");

    const nextUrl = format({
      pathname: "/",
      query,
    });

    return c.redirect(nextUrl);
  })
  .get("/logout", validateAuthCookie, async (c) => {
    const { auth_session } = c.req.valid("cookie");
    await lucia.invalidateSession(auth_session);
    const blankSession = lucia.createBlankSessionCookie();
    setCookie(
      c,
      blankSession.name,
      blankSession.value,
      blankSession.attributes
    );
    return c.redirect(c.req.header("Referer") ?? "/");
  })
  .get("/me", validateAuthCookie, async (c) => {
    const { auth_session } = c.req.valid("cookie");
    const { user } = await lucia.validateSession(auth_session);

    if (!user) {
      return c.json({ user: null, permissions: [], organizations: [] });
    }

    const { rawUserPermissions, rawUserOrganizations } = await db.transaction(
      async (t) => {
        const rawUserPermissions = await t
          .select()
          .from(usersToPermissions)
          .where(eq(usersToPermissions.userId, user.id))
          .leftJoin(
            permissions,
            eq(usersToPermissions.permissionId, permissions.id)
          );
        const rawUserOrganizations = await t
          .select()
          .from(usersToOrganizations)
          .where(eq(usersToOrganizations.userId, user.id))
          .leftJoin(
            organizations,
            eq(usersToOrganizations.organizationId, organizations.id)
          );

        return { rawUserPermissions, rawUserOrganizations };
      }
    );

    const userPermissions = rawUserPermissions.reduce<
      Record<string, (typeof rawUserPermissions)[number]["permissions"][]>
    >((acc, { permissions, users_to_permissions }) => {
      if (permissions) {
        (acc[users_to_permissions.organizationId] ??= []).push(permissions);
      }
      return acc;
    }, {});
    const userOrganizations = rawUserOrganizations.map(
      ({ organizations }) => organizations
    );

    return c.json({
      user,
      permissions: userPermissions,
      organizations: userOrganizations,
    });
  });
