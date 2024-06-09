import axios from "axios";
import { YM_CATEGORIES } from "./ym-categories";
import {
  CreateUpdateYMProduct,
  LoadCategorySettings,
  LoadPlacesFromYMRequest,
} from "./ym-types";

export const loadPlacesFromYM = async (token: string) =>
  axios.get<LoadPlacesFromYMRequest>(
    "https://api.partner.market.yandex.ru/campaigns",
    {
      data: { page: 1, pageSize: 100 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const loadYMCategories = () => YM_CATEGORIES;

export const loadSettingsByCategory = async (
  token: string,
  categoryId: string
) =>
  fetch(
    `https://api.partner.market.yandex.ru/category/${categoryId}/parameters`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json<LoadCategorySettings>());

export const createUpdateYMProduct = async (
  token: string,
  businessId: string,
  data: CreateUpdateYMProduct
) =>
  fetch(
    `https://api.partner.market.yandex.ru/businesses/99865396/offer-mappings/update`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  ).then((res) => res.json());
