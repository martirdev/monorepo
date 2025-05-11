import { z } from "zod";

export const clientSchema = z.object({
  id: z.string(),
  firstName: z
    .string()
    .trim()
    .min(3, "Имя должно содержать более 3 символов")
    .optional()
    .or(z.literal("")),
  secondName: z
    .string()
    .trim()
    .min(3, "Фамлия должна содержать более 3 символов")
    .optional()
    .or(z.literal("")),
  thirdName: z
    .string()
    .trim()
    .min(3, "Отчество должно содержать более 3 символов")
    .optional()
    .or(z.literal("")),
  contacts: z.array(
    z.union([
      z.object({
        contact: z.string().min(3, "Контакт должен быть не менее 3 символов"),
        type: z.enum(
          ["vk", "ok", "telegram", "instagram", "email", "youtube", "phone"],
          {
            required_error: "Обязательное поле",
          },
        ),
        action: z.literal("add"),
      }),
      z.object({
        contactId: z.string(),
        contact: z.string().min(3, "Контакт должен быть не менее 3 символов"),
        type: z.enum(
          ["vk", "ok", "telegram", "instagram", "email", "youtube", "phone"],
          {
            required_error: "Обязательное поле",
          },
        ),
        action: z.literal("remove"),
      }),
      z.object({
        contactId: z.string(),
        contact: z.string().min(3, "Контакт должен быть не менее 3 символов"),
        type: z.enum(
          ["vk", "ok", "telegram", "instagram", "email", "youtube", "phone"],
          {
            required_error: "Обязательное поле",
          },
        ),
        action: z.literal("default"),
      }),
    ]),
  ),
});
