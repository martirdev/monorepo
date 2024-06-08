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

// характеристики: images, name, offer_id, price, vat и другие
export const createUpdateProductValidator = z.object({
  attributes: z.array(
    z.object({
      id: z.number(),
      values: z.array(
        z.object({
          dictionary_value_id: z.number().optional(),
          value: z.number().or(z.string()),
        })
      ),
      complex_id: z.number(),
    })
  ),
  description_category_id: z.number(),
  barcode: z.string().optional(),
  color_image: z.string().optional(),
  complex_attributes: z.array(z.object({})).optional(),
  currency_code: z.enum(["RUB", "BYN", "KZT", "EUR", "USD", "CNY"]).optional(),
  depth: z.number().optional(),
  dimension_unit: z.enum(["mm", "cm", "in"]).optional(),
  geo_names: z.array(z.string()).optional(),
  height: z.number().optional(),
  image_group_id: z.string().optional(),
  images: z.array(z.string()),
  images360: z.array(z.string()).optional(),
  name: z.string(),
  offer_id: z.string(),
  old_price: z.string().optional(),
  pdf_list: z
    .array(
      z.object({
        index: z.number(),
        name: z.string(),
        src_url: z.string(),
      })
    )
    .optional(),
  premium_price: z.string().optional(),
  price: z.string().optional(),
  primary_image: z.string().optional(),
  service_type: z.enum(["IS_CODE_SERVICE", "IS_NO_CODE_SERVICE"]).optional(),
  vat: z.enum(["0", "0.1", "0.2"]),
  weight: z.number().optional(),
  weight_unit: z.enum(["g", "kg", "lb"]).optional(),
  width: z.number().optional(),
});

export type CreateUpdateProduct = {
  items: [z.infer<typeof createUpdateProductValidator>];
};
