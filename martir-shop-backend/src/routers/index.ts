import { router } from "../shared/trpc";
import { getContentById } from "../procedures/get-content-by-id";
import { getProducts } from "../procedures/get-products";
import { getProductVersion } from "../procedures/get-product-version";
import { setProduct } from "../procedures/set-product";
import { getCategories } from "../procedures/get-categories";
import { setCategory } from "../procedures/set-category";
import { getParamNames } from "../procedures/get-param-names";
import { getProductVersions } from "../procedures/get-product-versions";

export const appRouter = router({
  getContentById,

  getParamNames,

  getCategories,
  setCategory,

  setProduct,
  getProducts,
  getProductVersion,
  getProductVersions,
});

export type Router = typeof appRouter;
