import { getCategories } from "../procedures/get-categories";
import { getContentById } from "../procedures/get-content-by-id";
import { getParamNames } from "../procedures/get-param-names";
import { getProduct } from "../procedures/get-product";
import { getProductCountHistory } from "../procedures/get-product-count-history";
import { getProductVersion } from "../procedures/get-product-version";
import { getProducts } from "../procedures/get-products";
import { setCategory } from "../procedures/set-category";
import { setProduct } from "../procedures/set-product";
import { setProductCountHistory } from "../procedures/set-product-count-history";
import { router } from "../shared/trpc";

export const appRouter = router({
  getContentById,

  getParamNames,

  getCategories,
  setCategory,

  setProduct,
  getProduct,
  getProducts,
  getProductVersion,
  setProductCountHistory,
  getProductCountHistory,
});

export type Router = typeof appRouter;
