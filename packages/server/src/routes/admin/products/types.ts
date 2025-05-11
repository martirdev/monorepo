import { z } from "zod";
import {
  updateImageAddedItemScheme,
  updateImageDeletedItemScheme,
  updateImageScheme,
} from "./utils";

export type UpdateImageDeletedItemScheme = z.infer<
  typeof updateImageDeletedItemScheme
>;
export type UpdateImageAddedItemScheme = z.infer<
  typeof updateImageAddedItemScheme
>;
export type UpdateImage = z.infer<typeof updateImageScheme>;
