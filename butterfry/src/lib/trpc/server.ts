import { createTRPCProxyClient } from "@trpc/client";
import { cookies } from "next/headers";
import { makeSettings } from "./utils";
import { Router } from "../../../../martir-shop-backend/src/routers";

export const trpcNext = () => {
  const token = cookies().get("auth_session")?.value;
  return createTRPCProxyClient<Router>(makeSettings(token));
};
