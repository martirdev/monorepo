import { router } from "@/pages/router";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";

export function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
