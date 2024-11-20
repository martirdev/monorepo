import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { FC } from "react";

import { queryClient } from "@/shared/api";
import { router } from "@/shared/lib/routes";
import { TooltipProvider } from "@/shared/ui/tooltip";

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};
