import { z } from "zod";

export type LoadPlacesFromYMRequest = {
  campaigns: {
    domain: string;
    id: number;
    clientId: string;
    business: {
      id: string;
      name: string;
    };
  }[];
};

export type LoadCategorySettings = {
  result: {
    categoryId: number;
    parameters: {
      id: number;
      name: string;
      type: "TEXT" | "ENUM" | "BOOLEAN" | "NUMERIC";
      description: string;
      recommendationTypes: string[];
      required: boolean;
      filtering: boolean;
      distinctive: boolean;
      multivalue: boolean;
      allowCustomValues: boolean;
      values?: {
        id: number;
        value: string;
      }[];
      constraints?: {
        minValue?: number;
        maxValue?: number;
        maxLength?: number;
      };
      valueRestrictions: {
        limitingParameterId: number;
        limitedValues: {
          limitingOptionValueId: number;
          optionValueIds: number[];
        }[];
      }[];
    }[];
  };
};

export const createYMUpdateProductValidator = z.object({
  offerId: z.string(),
  name: z.string(),
  category: z.string(),
  marketCategoryId: z.number(),
  pictures: z.array(z.string()),
  videos: z.array(z.string()).optional(),
  barcodes: z.array(z.string()).optional(),
  vendor: z.string(),
  description: z.string(),
  manufacturerCountries: z.array(z.string()).optional(),
  weightDimensions: z.object({
    length: z.number(), // Длина упаковки в см.
    width: z.number(), // Ширина упаковки в см.
    height: z.number(), // Высота упаковки в см.
    weight: z.number(), // Вес товара в кг
  }),
  tags: z.array(z.string()).optional(),
  parameterValues: z.array(
    z.object({
      parameterId: z.number(),
      valueId: z.number(),
      value: z.string(),
    })
  ),
  basicPrice: z.object({
    value: z.number(),
    currencyId: z.enum(["RUR", "BYN", "KZT", "EUR", "USD", "CNY"]),
    discountBase: z.number().optional(),
  }),
});

export type CreateUpdateYMProduct = {
  offerMappings: {
    offer: z.infer<typeof createYMUpdateProductValidator>;
  }[];
};
