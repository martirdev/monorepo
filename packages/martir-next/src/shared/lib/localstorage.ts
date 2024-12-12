import { z } from "zod";

export const localStorageScheme = {
  cart: z.record(z.number()),
};

export type LocalStorageType = typeof localStorageScheme;
