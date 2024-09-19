import { validator } from "hono/validator";

import { clientSchema, getClientsQuerySchema, idParamSchema } from "./schemas";

export const getClientsQueryValidator = validator("query", (value, c) => {
  const parsed = getClientsQuerySchema.safeParse(value);
  if (!parsed.success) {
    return c.json({ message: "Invalid!" }, 401);
  }
  return parsed.data;
});

export const changeClientBodyValidator = validator("json", (value, c) => {
  const parsed = clientSchema.safeParse(value);
  if (!parsed.success) {
    return c.json({ message: "Invalid!" }, 401);
  }
  return parsed.data;
});

export const idParamValidator = validator("param", (value, c) => {
  const parsed = idParamSchema.safeParse(value);
  if (!parsed.success) {
    return c.json({ message: "Invalid!" }, 401);
  }
  return parsed.data;
});
