import axios from "axios";
import { OZON_CATEGORIES } from "./ozon-categories";
import {
  CreateUpdateProduct,
  LoadCategorySettings,
  LoadSettingValues,
} from "./ozon-types";

export const loadOzonCategories = () => OZON_CATEGORIES;

export const loadOzonSettingValues = async (
  token: string,
  place: string,
  attribute_id: number,
  type_id: number,
  description_category_id: number,
  last_value_id: number = 0
) =>
  fetch(`https://api-seller.ozon.ru/v1/description-category/attribute/values`, {
    method: "POST",
    body: JSON.stringify({
      language: "RU",
      attribute_id,
      description_category_id,
      last_value_id,
      limit: 5000,
      type_id,
    }),
    headers: {
      "Client-Id": place,
      "Api-Key": token,
    },
  }).then((res) => res.json() as Promise<LoadSettingValues>);

export const loadOzonSettingsByCategory = async (
  token: string,
  place: string,
  type_id: number,
  description_category_id: number
) =>
  fetch(`https://api-seller.ozon.ru/v1/description-category/attribute`, {
    method: "POST",
    body: JSON.stringify({
      language: "RU",
      type_id,
      description_category_id,
    }),
    headers: {
      "Client-Id": place,
      "Api-Key": token,
    },
  }).then((res) => res.json() as Promise<LoadCategorySettings>);

export const createUpdateProduct = async (
  token: string,
  place: string,
  data: CreateUpdateProduct
) =>
  fetch(`https://api-seller.ozon.ru/v3/product/import`, {
    method: "POST",
    headers: {
      "Client-Id": place,
      "Api-Key": token,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json() as Promise<CreateUpdateProduct>);
