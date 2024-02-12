import { prisma, procedure } from "../../shared/trpc";

export const getCategories = procedure.query(async ({}) => {
  return await prisma.category.findMany();
});
