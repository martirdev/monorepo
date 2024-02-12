import { PropUnion } from "../types";

export const entries = <T extends {}>(val: T) =>
  Object.entries(val) as NonNullable<PropUnion<T>>[];
