import { ProductAddedImage, ProductPackage, ProductParam } from "./types";

export const DEFAULT_IMAGE: ProductAddedImage = { url: "", type: "added" };
export const DEFAULT_PACKAGE: ProductPackage = {
  height: undefined!,
  length: undefined!,
  weight: undefined!,
  width: undefined!,
};
export const DEFAULT_PARAM: ProductParam = {
  name: "",
  values: [],
};

export const META_PLACEHOLDER = `{
    "tags": ["tshirt", "cotton"],
    ...
}`;
