import {
  HttpClient,
  HttpClientRequest,
  HttpClientResponse,
} from "@effect/platform";
import { eq } from "drizzle-orm";
import { Effect } from "effect";
import { generateId } from "lucia";
import { z } from "zod";

import { db } from "@/lib/db";
import { User, users } from "@/scheme";

export class UserCreated {
  readonly _tag = "UserCreated";
}

export class UserYandexInfoHTTPError {
  readonly _tag = "UserYandexInfoHTTPError";
}

export class GetUserFromDBByYandexError {
  readonly _tag = "GetUserFromDBByYandexError";
}

const yandexUserInfoSchema = z.object({
  id: z.string(),
  login: z.string(),
  client_id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

type YandexUserInfo = z.infer<typeof yandexUserInfoSchema>;

export const getUserYandexInfo = (token: string) =>
  HttpClientRequest.get("https://login.yandex.ru/info", {
    headers: {
      Authorization: `OAuth ${token}`,
    },
  }).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.json,
    Effect.map(yandexUserInfoSchema.parse),
    Effect.retry({ times: 3 }),
    Effect.catchAll((error) => {
      console.error(error);
      return Effect.fail(new UserYandexInfoHTTPError());
    })
  );

export const getUserFromDBByYandexId = (yandexUserInfo: YandexUserInfo) =>
  Effect.promise(() =>
    db.query.users.findFirst({
      where: eq(users.yandexUserId, yandexUserInfo.id),
    })
  ).pipe(
    Effect.map((dbUser) => ({ dbUser, yandexUserInfo })),
    Effect.catchAll((error) => {
      console.error(error);
      return Effect.fail(new GetUserFromDBByYandexError());
    })
  );

export const createUserIfNotExist = async ({
  dbUser,
  yandexUserInfo,
}: {
  dbUser: User | undefined;
  yandexUserInfo: YandexUserInfo;
}) => {
  const id = dbUser?.id ?? generateId(15);

  if (!dbUser) {
    await db.insert(users).values({
      id,
      yandexUserId: yandexUserInfo.id,
      firstName: yandexUserInfo.first_name,
      secondName: yandexUserInfo.last_name,
    });
    return { id, code: new UserCreated()._tag };
  }

  return { id };
};
