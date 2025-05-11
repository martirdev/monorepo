import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { bearer, jwt, organization } from "better-auth/plugins";

import { db } from "./db";

export const auth = betterAuth({
  trustedOrigins: process.env.TRUSTED_ORIGINS?.split(","),
  basePath: "/auth",
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [organization(), jwt(), bearer()],
  emailAndPassword: {
    enabled: true,
  },
  appName: "martir",
});
