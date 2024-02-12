import { prisma, procedure } from "../../shared/trpc";

export const getParamNames = procedure.query(async ({}) => {
  return await prisma.paramValues.findMany({
    distinct: ["name"],
  });
});
