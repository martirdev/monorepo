import { prisma, procedure } from "../../shared/trpc";

export const getMarketplaceKeys = procedure.query(async () => {
  return await prisma.marketplaceKey.findMany({
    select: {
      encrypted_api_key: true,
      id: true,
      places: true,
      type: true,
    },
  });
});
