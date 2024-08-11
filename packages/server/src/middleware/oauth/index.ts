import {
  Yandex,
  YandexTokens,
  generateCodeVerifier,
  generateState,
} from "arctic";
import { HonoRequest, MiddlewareHandler, TypedResponse } from "hono";
import { getCookie, setCookie, deleteCookie } from "hono/cookie";

const MINUTE = 60;

export function oauth(
  makeOption: (c: HonoRequest) => ConstructorParameters<typeof Yandex>
): MiddlewareHandler {
  return async (c, next) => {
    const provider = new Yandex(...makeOption(c.req));

    c.set("oauth", {
      redirect: async () => {
        const state = generateState();
        const codeVerifier = generateCodeVerifier();

        setCookie(c, "state", state, {
          maxAge: MINUTE * 10,
        });
        setCookie(c, "codeVerifier", codeVerifier, {
          maxAge: MINUTE * 10,
        });

        const url = await provider.createAuthorizationURL(state);

        return c.redirect(url.href);
      },
      authorize: async () => {
        if (getCookie(c, "state") !== c.req.query("state"))
          throw Error("State mismatch");

        deleteCookie(c, "state");

        const code = c.req.query("code");
        if (!getCookie(c, "codeVerifier") || !code)
          throw new Error(
            `Bug with ${String(provider)} and codeVerifier. Please open issue`
          );
        deleteCookie(c, "codeVerifier");

        return await provider.validateAuthorizationCode(code);
      },
    });

    await next();
  };
}

declare module "hono" {
  interface ContextVariableMap {
    oauth: {
      redirect: () => Promise<
        Response & TypedResponse<undefined, 302, "redirect">
      >;
      authorize: () => Promise<YandexTokens>;
    };
  }
}
