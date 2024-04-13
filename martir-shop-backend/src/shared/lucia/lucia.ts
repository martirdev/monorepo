import { Lucia } from "lucia";
import { UsersOnProjects } from "../../../prisma/generated/client";
import { makePrismaAdapter } from "./prisma-adapter";

export const lucia = new Lucia(makePrismaAdapter(), {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (user) => {
    return {
      name: user.name,
      surname: user.surname,
      avatar: user.avatar,
      projects: user.usersOnProjects,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: {
      name: string;
      surname: string;
      avatar: string | null;
      usersOnProjects?: UsersOnProjects[];
    };
  }
}
