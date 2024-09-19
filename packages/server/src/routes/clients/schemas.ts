import { z } from "zod";

export const idParamSchema = z.object({
  id: z.string(),
});

export const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  firstName: z.string().optional(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
  contactInfo: z.string().optional(),
});

export const getClientsQuerySchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  name: z.string().optional(),
  id: z.string().optional(),
});
