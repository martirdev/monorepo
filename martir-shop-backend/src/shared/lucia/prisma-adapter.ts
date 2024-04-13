import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { prisma } from "../trpc";
import { DatabaseSession, DatabaseUser } from "lucia";
import { omit } from "lodash";

function transformIntoDatabaseSession<
  T extends { id: string; userId: string; expiresAt: Date }
>({ id, userId, expiresAt, ...attributes }: T) {
  return {
    id,
    userId,
    expiresAt,
    attributes,
  };
}
function transformIntoDatabaseUser<T extends { id: string }>(raw: T) {
  const { id, ...attributes } = raw;
  return {
    id,
    attributes,
  };
}

export const makePrismaAdapter = () => {
  const adapter = new PrismaAdapter(prisma.session, prisma.user);
  adapter.getSessionAndUser = async (
    sessionId: string
  ): Promise<[session: DatabaseSession | null, user: DatabaseUser | null]> => {
    const result = await prisma.session.findUnique({
      where: {
        id: sessionId,
      },
      include: {
        user: {
          include: {
            usersOnProjects: true,
          },
        },
      },
    });
    if (!result) return [null, null];

    return [
      transformIntoDatabaseSession(omit(result, "user")),
      transformIntoDatabaseUser(result.user),
    ];
  };

  return adapter;
};
