import { createMarketplaceKey } from "../procedures/create-marketplace-keys";
import { getMarketplaceCategories } from "../procedures/get-marketplace-categories";
import { getMarketplaceKeys } from "../procedures/get-marketplace-keys";
import { getSettingsByCategory } from "../procedures/get-settings-by-category";
import { removeMarkeplaceKeys } from "../procedures/remove-markeplace-keys";
import { router } from "../shared/trpc";

export const appRouter = router({
  getMarketplaceKeys,
  createMarketplaceKey,
  removeMarkeplaceKeys,

  getMarketplaceCategories,
  getSettingsByCategory,

  getProduct,
  createProduct,
});

export type Router = typeof appRouter;
