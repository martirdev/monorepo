import { getCategories } from "../procedures/get-categories";
import { getContentById } from "../procedures/get-content-by-id";
import { getCustomers } from "../procedures/get-customers";
import { getOrder } from "../procedures/get-order";
import { getOrders } from "../procedures/get-orders";
import { getParamNames } from "../procedures/get-param-names";
import { getProduct } from "../procedures/get-product";
import { getProductCountHistory } from "../procedures/get-product-count-history";
import { getProductVersion } from "../procedures/get-product-version";
import { getProducts } from "../procedures/get-products";
import { removeComment } from "../procedures/remove-comment";
import { setCategory } from "../procedures/set-category";
import { setComment } from "../procedures/set-comment";
import { setOrder } from "../procedures/set-order";
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

  getOrder,
  getOrders,
  setOrder,

  setComment,
  removeComment,

  getCustomers,
});

export type Router = typeof appRouter;
