import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { loadOzonSettingValues } from "../../shared/external-api";
import { prisma, procedure } from "../../shared/trpc";

const inputValidator = z.object({
  mpKeyId: z.string(),
  attributeId: z.number(),
  descriptionCategoryId: z.number(),
  lastValueId: z.number().optional(),
  limit: z.number(),
  typeId: z.number(),
});

export const getSettingValues = procedure
  .input(inputValidator)
  .query(async ({ input }) => {
    const mpKey = await prisma.marketplaceKey.findFirst({
      where: {
        id: input.mpKeyId,
      },
    });
    if (!mpKey) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: `Marketplace key with ID: "${input.mpKeyId}" - not found`,
      });
    }

    switch (mpKey.type) {
      case "ym":
        return [];
      case "ozon": {
        const settingValues = await loadOzonSettingValues(
          mpKey.api_key,
          mpKey.client_id!,
          input.attributeId,
          input.typeId,
          input.descriptionCategoryId,
          input.lastValueId
        );
        return settingValues.result;
      }
    }
  });
