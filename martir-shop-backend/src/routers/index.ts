import { addUserToProject } from "../procedures/add-user-to-project";
import { getContentById } from "../procedures/get-content-by-id";
import { getCustomer } from "../procedures/get-customer";
import { getCustomers } from "../procedures/get-customers";
import { getOrder } from "../procedures/get-order";
import { getOrders } from "../procedures/get-orders";
import { getProduct } from "../procedures/get-product";
import { getProductCountHistory } from "../procedures/get-product-count-history";
import { getProductVersion } from "../procedures/get-product-version";
import { getProducts } from "../procedures/get-products";
import { getProjectUsers } from "../procedures/get-project-users";
import { getProjects } from "../procedures/get-projects";
import { removeComment } from "../procedures/remove-comment";
import { setComment } from "../procedures/set-comment";
import { setCustomer } from "../procedures/set-customer";
import { setOrder } from "../procedures/set-order";
import { setProduct } from "../procedures/set-product";
import { setProductCountHistory } from "../procedures/set-product-count-history";
import { setProject } from "../procedures/set-project";
import { setUserRole } from "../procedures/set-user-role";
import { router } from "../shared/trpc";

export const appRouter = router({
  getContentById,

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

  getCustomer,
  getCustomers,
  setCustomer,

  setProject,
  getProjects,
  getProjectUsers,
  addUserToProject,
  setUserRole,
});

export type Router = typeof appRouter;
