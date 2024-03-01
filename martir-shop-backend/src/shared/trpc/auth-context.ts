import { lucia } from "../lucia";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

const DEFAULT_VALUE = { user: null };

export async function createContext({
  req: { headers },
}: FetchCreateContextFnOptions) {
  const authorization = headers.get("authorization");
  if (!authorization || !/Bearer .+/gm.test(authorization)) {
    return DEFAULT_VALUE;
  }

  const sessionId = lucia.readBearerToken(authorization ?? "");
  if (!sessionId) {
    return DEFAULT_VALUE;
  }

  const { user } = await lucia.validateSession(sessionId);
  return { user };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
