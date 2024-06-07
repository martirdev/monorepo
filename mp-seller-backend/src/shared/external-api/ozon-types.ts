import { z } from "zod";

export type LoadSettingValues = {
  result: {
    id: number;
    value: string;
    info: string;
    picture: string;
  }[];
  has_next: boolean;
};

export type LoadCategorySettings = {
  result: {
    id: number;
    attribute_complex_id: number;
    name: string;
    description: string;
    type: "String" | "ImageURL";
    is_collection: boolean;
    is_required: boolean;
    is_aspect: boolean;
    max_value_count: number;
    group_name: string;
    group_id: number;
    dictionary_id: number;
  }[];
};

export const createUpdateProductValidator = z.object({
  attributes: z.array(
    z.object({
      id: z.number(),
      values: z.array(
        z.object({
          dictionary_value_id: z.number(),
          value: z.number(),
        })
      ),
      complex_id: z.number(),
    })
  ),
  barcode: z.string().optional(),
  color_image: z.string().optional(),
  complex_attributes: z.array(z.object({})).optional(),
  currency_code: z.enum(["RUB", "BYN", "KZT", "EUR", "USD", "CNY"]),
  depth: z.number().optional(),
  dimension_unit: z.enum(["mm", "cm", "in"]),
  geo_names: z.array(z.string()).optional(),
  height: z.number().optional(),
  image_group_id: z.string().optional(),
  images: z.array(z.string()).optional(),
  images360: z.array(z.string()).optional(),
  name: z.string().optional(),
  offer_id: z.string().optional(),
  old_price: z.string().optional(),
  pdf_list: z.array(
    z.object({
      index: z.number(),
      name: z.string(),
      src_url: z.string(),
    })
  ),
  premium_price: z.string().optional(),
  price: z.string().optional(),
  primary_image: z.string().optional(),
  service_type: z.enum(["IS_CODE_SERVICE", "IS_NO_CODE_SERVICE"]).optional(),
  vat: z.enum(["0", "0.1", "0.2"]).optional(),
  weight: z.number().optional(),
  weight_unit: z.enum(["g", "kg", "lb"]).optional(),
  width: z.number().optional(),
});

export type CreateUpdateProduct = z.infer<typeof createUpdateProductValidator>;
