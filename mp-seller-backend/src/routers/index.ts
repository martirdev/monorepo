import { createMarketplaceKey } from "../procedures/create-marketplace-keys";
import { getMarketplaceKeys } from "../procedures/get-marketplace-keys";
import { removeMarkeplaceKeys } from "../procedures/remove-markeplace-keys";
import { procedure, router } from "../shared/trpc";

import { PrismaClient } from "../../prisma/generated/client";

export const appRouter = router({
  getMarketplaceKeys,
  createMarketplaceKey,
  removeMarkeplaceKeys,
});

export type Router = typeof appRouter;
