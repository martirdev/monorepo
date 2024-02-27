import { Cookie } from "lucia";
import { prisma } from "../shared/trpc";
import { UserInfoResponse } from "../shared/external-api/yandex";

export const makeSessionCookie = (sessionCookie: Cookie) => ({
  ...sessionCookie.attributes,
  domain: process.env.HOST,
  value: sessionCookie.value,
});

export const findOrCreateUser = async (yaUser: UserInfoResponse) => {
  let user = await prisma.user.findFirst({
    where: {
      yandex_id: yaUser.id,
    },
  });

  if (user) {
    return user;
  }

  return await prisma.user.create({
    data: {
      name: yaUser.first_name,
      surname: yaUser.last_name,
      yandex_id: yaUser.id,
      avatar: yaUser.default_avatar_id,
    },
  });
};
