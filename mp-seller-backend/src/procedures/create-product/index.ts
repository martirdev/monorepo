import { TRPCError } from "@trpc/server";
import { keyBy } from "lodash";
import { z } from "zod";
import {
  createUpdateOzonProduct,
  createUpdateYMProduct,
  loadPlacesFromYM,
} from "../../shared/external-api";
import { createOzonUpdateProductValidator } from "../../shared/external-api/ozon-types";
import { prisma, procedure } from "../../shared/trpc";
import { entries } from "../../shared/utils";
import { createYMUpdateProductValidator } from "../../shared/external-api/ym-types";

const queryValidation = z.object({
  ym: z
    .intersection(
      z.object({ place: z.string() }),
      createYMUpdateProductValidator
    )
    .optional(),
  ozon: z
    .intersection(
      z.object({ place: z.string() }),
      createOzonUpdateProductValidator
    )
    .optional(),
});

export const createProduct = procedure
  .input(queryValidation)
  .mutation(async ({ input }) => {
    const placeIds = Object.values(input).map(({ place }) => place);
    const places = await prisma.place.findMany({
      where: {
        id: {
          in: placeIds,
        },
      },
      include: {
        MarketplaceKey: true,
      },
    });
    if (placeIds.length !== places.length) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Some of places: ${placeIds.join(", ")} -  not exist`,
      });
    }
    const placesById = keyBy(places, "id");

    const ymPlace = placesById[input.ym?.place ?? ""];
    const apiKey = ymPlace?.MarketplaceKey?.api_key;
    let businessId: string | undefined;
    if (apiKey && ymPlace) {
      const { data } = await loadPlacesFromYM(apiKey);
      businessId = data.campaigns.find(
        (campaign) => ymPlace.mp_id === campaign.id.toString()
      )?.business.id;
    }

    const products = entries(input);
    const promises = products.map(([marketKey, marketValues]) => {
      const placeKey = placesById[marketValues.place].MarketplaceKey;

      if (!placeKey) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Place haven't keys, contact with admins`,
        });
      }

      switch (marketKey) {
        case "ym":
          if (!businessId) {
            throw new TRPCError({
              code: "BAD_REQUEST",
              message: `Can't find businessId for place: ${marketValues.place}`,
            });
          }
          return createUpdateYMProduct(placeKey.api_key, businessId, {
            offerMappings: [{ offer: marketValues }],
          });
        case "ozon":
          return createUpdateOzonProduct(
            placeKey.api_key,
            placeKey.client_id ?? "",
            { items: [marketValues] }
          );
        default:
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Marketplace ${marketKey} not supported`,
          });
      }
    });

    const results = await Promise.all(promises);

    await prisma.product.createMany({
      data: products.map(([_marketPlace, marketValues]) => ({
        data: marketValues,
        place_id: marketValues.place,
      })),
    });

    return {
      status: "ok",
      data: results,
      message: "Creation is started",
    };
  });
