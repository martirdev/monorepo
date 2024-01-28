import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {
  loadOzonSettingsByCategory,
  loadSettingsByCategory,
} from "../../shared/external-api";
import { prisma, procedure } from "../../shared/trpc";

const inputValidator = z.object({
  mpKeyId: z.string(),
  categoryId: z.string(),
  descriptionCategoryId: z.string().optional(),
});

export const getSettingsByCategory = procedure
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
        const settings = await loadSettingsByCategory(
          mpKey.api_key,
          input.categoryId
        );
        return settings.data.result[0].parameters.map((setting) => ({
          id: setting.id,
          name: setting.name,
          description: setting.description,
          type: setting.type,
          is_required: !!setting.required,
        }));
      case "ozon": {
        if (!input.descriptionCategoryId) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message:
              "description_category_id param is required for this marketplace type",
          });
        }
        const settings = await loadOzonSettingsByCategory(
          mpKey.api_key,
          input.categoryId,
          input.descriptionCategoryId
        );
        return settings.data.result.map((setting) => ({
          id: setting.id,
          name: setting.name,
          description: setting.description,
          type: setting.type,
          is_required: !!setting.is_required,
        }));
      }
    }
  });
