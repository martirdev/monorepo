import { z } from "zod";

export const deleteClientsScheme = z.array(z.string());

export const updateClientScheme = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  secondName: z.string().optional(),
  thirdName: z.string().optional(),
  contacts: z.array(
    z.union([
      z.object({
        type: z.enum([
          "vk",
          "ok",
          "telegram",
          "instagram",
          "email",
          "youtube",
          "phone",
        ]),
        contact: z.string(),
        action: z.literal("add"),
      }),
      z.object({
        id: z.string(),
        action: z.literal("remove"),
      }),
    ])
  ),
});

export const createClientScheme = z.object({
  id: z.string().optional(),
  firstName: z.string().optional(),
  secondName: z.string().optional(),
  thirdName: z.string().optional(),
  contacts: z.array(
    z.object({
      id: z.string().optional(),
      type: z.enum([
        "vk",
        "ok",
        "telegram",
        "instagram",
        "email",
        "youtube",
        "phone",
      ]),
      contact: z.string(),
    })
  ),
});
