import { organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: `${location.origin}/api/auth`,
  plugins: [organizationClient()],
});