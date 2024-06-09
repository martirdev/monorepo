import { createMarketplaceKey } from "../procedures/create-marketplace-keys";
import { createProduct } from "../procedures/create-product";
import { getMarketplaceCategories } from "../procedures/get-marketplace-categories";
import { getMarketplaceKeys } from "../procedures/get-marketplace-keys";
import { getProducts } from "../procedures/get-products";
import { getSettingValues } from "../procedures/get-setting-values";
import { getSettingsByCategory } from "../procedures/get-settings-by-category";
import { removeMarkeplaceKeys } from "../procedures/remove-markeplace-keys";
import { router } from "../shared/trpc";

export const appRouter = router({
  getMarketplaceKeys,
  createMarketplaceKey,
  removeMarkeplaceKeys,

  getMarketplaceCategories,
  getSettingsByCategory,
  getSettingValues,

  createProduct,
  getProducts,
});

export type Router = typeof appRouter;
