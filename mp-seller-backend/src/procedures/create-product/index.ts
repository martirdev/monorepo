import { TRPCError } from "@trpc/server";
import { keyBy } from "lodash";
import { z } from "zod";
import { createUpdateProduct } from "../../shared/external-api";
import { createUpdateProductValidator } from "../../shared/external-api/ozon-types";
import { prisma, procedure } from "../../shared/trpc";
import { entries } from "../../shared/utils";

const queryValidation = z.object({
  markets: z.object({
    ya: z
      .intersection(z.object({ placeId: z.string() }), z.object({}))
      .optional(),
    ozon: z
      .intersection(
        z.object({ placeId: z.string() }),
        createUpdateProductValidator
      )
      .optional(),
  }),
});

export const createProduct = procedure
  .input(queryValidation)
  .query(async ({ input }) => {
    const placeIds = Object.values(input.markets).map(({ placeId }) => placeId);
    const places = await prisma.marketplaceKey.findMany({
      where: {
        places: {
          some: {
            id: {
              in: placeIds,
            },
          },
        },
      },
    });
    if (placeIds.length !== places.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Some of places: ${placeIds.join(", ")} -  not exist`,
      });
    }
    const placesById = keyBy(places, "id");

    entries(input.markets).map((item) => {
      const [marketKey, marketValues] = item;
      const place = placesById[marketValues.placeId];

      switch (marketKey) {
        case "ya":
          return new Promise(() => {});
        case "ozon":
          return createUpdateProduct(
            place.api_key,
            place.client_id ?? "",
            marketValues
          );
        default:
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Marketplace ${marketKey} not supported`,
          });
      }
    });

    return {
      status: "ok",
      message: "Creation is started",
    };
  });
