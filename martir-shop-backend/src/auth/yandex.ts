import {
  Google,
  OAuth2RequestError,
  generateCodeVerifier,
  generateState,
} from "arctic";
import Elysia from "elysia";
import { Yandex } from "../shared/lucia/yandex-provider";
import { yandexUserInfo } from "../shared/external-api/yandex";
import { lucia } from "../shared/lucia";
import { findOrCreateUser, makeSessionCookie } from "./utils";
import { SESSION_COOKIE } from "./consts";

const makeYandexProvider = () => {
  const client_id = process.env.YANDEX_CLIENT_ID;
  const client_secret = process.env.YANDEX_CLIENT_SECRET;
  if (!client_id) {
    throw new Error("YANDEX_CLIENT_ID not exists in env");
  }
  if (!client_secret) {
    throw new Error("YANDEX_CLIENT_SECRET not exists in env");
  }
  return new Yandex(
    client_id,
    client_secret,
    `${process.env.DOMAIN}/yandex/login/callback`
  );
};

const yandex = makeYandexProvider();

export const yandexAuth = new Elysia({ prefix: "/yandex" })
  .get("/login", async ({ set, cookie, headers }) => {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    const url = await yandex.createAuthorizationURL(state, codeVerifier);

    cookie.state.set({
      value: state,
      secure: process.env.NODE_ENV === "production" ?? false,
      path: "/",
      httpOnly: true,
      maxAge: 60 * 10,
    });
    cookie.code_verifier.set({
      value: codeVerifier,
      secure: process.env.NODE_ENV === "production" ?? false,
      path: "/",
      httpOnly: true,
      maxAge: 60 * 10,
    });
    cookie.from.value = headers.referer;

    return (set.redirect = url.toString());
  })
  .get("/login/callback", async ({ set, cookie, query: { code, state } }) => {
    // TODO: Нужно ретернить стейт через куки/хедеры что-бы клиент мог его обработать, при возникновении ошибки, мы остаемся на странице
    const storedState = cookie.state.value;
    const storedCodeVerifier = cookie.code_verifier.value;

    if (!code || !storedState || !storedCodeVerifier || state !== storedState) {
      set.status = 400;
      return { code, storedState, storedCodeVerifier, state };
    }

    try {
      const tokens = await yandex.validateAuthorizationCode(
        code,
        storedCodeVerifier
      );
      const yaUser = await yandexUserInfo(tokens.accessToken);
      const user = await findOrCreateUser(yaUser);

      const session = await lucia.createSession(user.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);

      set.status = 302;
      cookie[SESSION_COOKIE].set(makeSessionCookie(sessionCookie));
      return (set.redirect = cookie.from.value);
    } catch (e) {
      console.error(e);
      if (e instanceof OAuth2RequestError) {
        set.status = 400;
        return e;
      }

      set.status = 500;
      return e;
    }
  });
