import { z } from "zod";
import {
  loadOzonCategories,
  loadYMCategories,
} from "../../shared/external-api";
import { procedure } from "../../shared/trpc";

export const getMarketplaceCategories = procedure
  .input(z.enum(["ym", "ozon"]))
  .query(async ({ input }) => {
    switch (input) {
      case "ozon":
        return loadOzonCategories();
      case "ym":
        return loadYMCategories();
    }
  });
