import { getCategories } from "../procedures/get-categories";
import { getContentById } from "../procedures/get-content-by-id";
import { getParamNames } from "../procedures/get-param-names";
import { getProduct } from "../procedures/get-product";
import { getProductVersion } from "../procedures/get-product-version";
import { getProducts } from "../procedures/get-products";
import { setCategory } from "../procedures/set-category";
import { setProduct } from "../procedures/set-product";
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
});

export type Router = typeof appRouter;
