import axios from "axios";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";
import { cryptString } from "../../shared/utils/converters";
import { loadPlacesFromYM } from "../../shared/external-api";

const ozonValidator = z.object({
    apiKey: z.string(),
    type: z.literal("ozon"),
    clientId: z.string(),
    place: z.string(),
});
const ymValidator = z.object({
    apiKey: z.string(),
    type: z.literal("ym"),
});
const apiKeysUnion = z.union([ozonValidator, ymValidator]);

const createMarketplaceKeyByType = async (
    data: z.infer<typeof apiKeysUnion>
) => {
    switch (data.type) {
        case "ym":
            const { data: places } = await loadPlacesFromYM(data.apiKey);
            return {
                api_key: data.apiKey,
                encrypted_api_key: cryptString(data.apiKey),
                type: data.type,
                places: {
                    createMany: {
                        data: places.campaigns.map((campaign) => ({
                            mp_id: campaign.id.toString(),
                            name: campaign.domain,
                        })),
                    },
                },
            };
        case "ozon":
            return {
                api_key: data.apiKey,
                encrypted_api_key: cryptString(data.apiKey),
                type: data.type,
                client_id: data.clientId,
                places: { create: { name: data.place } },
            };
    }
};

export const createMarketplaceKey = procedure
    .input(apiKeysUnion)
    .query(async ({ input }) => {
        const data = await createMarketplaceKeyByType(input);
        return await prisma.marketplaceKey.create({ data });
    });
