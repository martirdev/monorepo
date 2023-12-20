import { lazy as l } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      return { Component: l(() => import("./hello-page")) };
    },
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
