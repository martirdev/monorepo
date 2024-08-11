import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { InferSelectModel } from "drizzle-orm";
import { Effect } from "effect";
import { Context } from "hono";
import { setCookie } from "hono/cookie";
import { validator } from "hono/validator";
import { Lucia } from "lucia";
import { z } from "zod";

import { sessions, users } from "@/scheme";

import { db } from "./db";

const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    console.log({ attributes });
    return attributes;
  },
});

export const createUserSession =
  (c: Context) =>
  ({ id }: { id: string }) =>
    Effect.promise(() => lucia.createSession(id, {})).pipe(
      Effect.tap((session) => {
        const cookie = lucia.createSessionCookie(session.id);
        setCookie(c, cookie.name, cookie.value, cookie.attributes);
      })
    );

const authCookieSchema = z.object({
  auth_session: z.string(),
});

export const validateAuthCookie = validator("cookie", (value, c) => {
  const parsed = authCookieSchema.safeParse(value);

  return parsed.success
    ? parsed.data
    : c.json({ message: "Unauthorized" }, 401);
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: InferSelectModel<typeof users>;
  }
}
