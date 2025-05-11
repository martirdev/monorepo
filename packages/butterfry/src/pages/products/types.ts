import { z } from "zod";
import {
  createInventorySchema,
  createPriceSchema,
  createProductSchema,
  productImageAddedScheme,
  productImageRemovedScheme,
  productPackageScheme,
  productParamScheme,
  updateProductVariantSchema,
} from "./utils";

export type ProductsFiltersForm = {
  name: string;
};

export type ProductPackage = z.infer<typeof productPackageScheme>;
export type ProductAddedImage = z.infer<typeof productImageAddedScheme>;
export type ProductRemovedImage = z.infer<typeof productImageRemovedScheme>;
export type ProductParam = z.infer<typeof productParamScheme>;
export type ProductCreateForm = z.infer<typeof createProductSchema>;
export type ProductVariantUpdateForm = z.infer<
  typeof updateProductVariantSchema
>;
export type CreateInventoryForm = z.infer<typeof createInventorySchema>;
export type CreatePriceForm = z.infer<typeof createPriceSchema>;

export type Product = {
  id: string;
  name: string;
  productVariants: Variant[];
};

export type Variant = {
  id: string;
  name: string;
  categoryId: string;
  meta: string | null;
  description: string | null;
  stock: {
    id: string;
    sku?: string;
    reservedQuantity?: number;
    stockedQuantity?: number;
  };
  lastPrice: {
    price: number;
  };
  images: { image: { id: string; url: string } }[];
  package: {
    weight?: number;
    length?: number;
    width?: number;
    height?: number;
  };
  params: {
    paramValue: {
      value: string;
      param: {
        name: string;
      };
    };
  }[];
};
