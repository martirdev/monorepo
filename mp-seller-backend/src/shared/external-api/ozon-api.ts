import axios from "axios";
import { OZON_CATEGORIES } from "./ozon-categories";
import { CreateUpdateProduct, LoadCategorySettings } from "./ozon-types";

export const loadOzonCategories = () => OZON_CATEGORIES;

export const loadOzonSettingsByCategory = async (
  token: string,
  place: string,
  description_category_id: number,
  type_id: number
) =>
  axios.post<LoadCategorySettings>(
    `https://api-seller.ozon.ru/v1/description-category/attribute`,
    {
      language: "RU",
      type_id,
      description_category_id,
    },
    {
      headers: {
        "Client-Id": place,
        "Api-Key": token,
      },
    }
  );

export const createUpdateProduct = async (
  token: string,
  place: string,
  data: CreateUpdateProduct
) =>
  axios.post<CreateUpdateProduct>(
    `https://api-seller.ozon.ru/v3/product/import`,
    data,
    {
      headers: {
        "Client-Id": place,
        "Api-Key": token,
      },
    }
  );
