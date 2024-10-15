import { useState, useEffect } from "react";

export type Product = {
  params: Record<string, string>;
  count: number;
  id: string;
  name: string;
  price: number;
};
export type Products = Record<string, Product>;

const products: Products = {
  t001_Black_XS: {
    params: { size: "XS", color: "Black" },
    count: 4,
    id: "t001_Black_XS",
    name: "Черная хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Black_S: {
    params: { size: "S", color: "Black" },
    count: 3,
    id: "t001_Black_S",
    name: "Черная хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Black_M: {
    params: { size: "M", color: "Black" },
    count: 5,
    id: "t001_Black_M",
    name: "Черная хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Black_L: {
    params: { size: "L", color: "Black" },
    count: 1,
    id: "t001_Black_L",
    name: "Черная хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Black_XL: {
    params: { size: "XL", color: "Black" },
    count: 2,
    id: "t001_Black_XL",
    name: "Черная хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_White_XS: {
    params: { size: "XS", color: "White" },
    count: 5,
    id: "t001_White_XS",
    name: "Белая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_White_S: {
    params: { size: "S", color: "White" },
    count: 5,
    id: "t001_White_S",
    name: "Белая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_White_M: {
    params: { size: "M", color: "White" },
    count: 5,
    id: "t001_White_M",
    name: "Белая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_White_L: {
    params: { size: "L", color: "White" },
    count: 5,
    id: "t001_White_L",
    name: "Белая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_White_XL: {
    params: { size: "XL", color: "White" },
    count: 5,
    id: "t001_White_XL",
    name: "Белая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Peach_XS: {
    params: { size: "XS", color: "Peach" },
    count: 5,
    id: "t001_Peach_XS",
    name: "Персиковая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Peach_S: {
    params: { size: "S", color: "Peach" },
    count: 5,
    id: "t001_Peach_S",
    name: "Персиковая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Peach_M: {
    params: { size: "M", color: "Peach" },
    count: 5,
    id: "t001_Peach_M",
    name: "Персиковая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Peach_L: {
    params: { size: "L", color: "Peach" },
    count: 5,
    id: "t001_Peach_L",
    name: "Персиковая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
  t001_Peach_XL: {
    params: { size: "XL", color: "Peach" },
    count: 5,
    id: "t001_Peach_XL",
    name: "Персиковая хлопковая оверсайз футболка с вышитым логотипом",
    price: 6000,
  },
};

export const useGetProduct = (id: string) => {
  const [data, setData] = useState({
    loading: true,
    data: undefined as Product | undefined,
  });

  useEffect(() => {
    setData({ loading: true, data: undefined });

    const timer = setTimeout(() => {
      setData({ loading: false, data: products[id] });
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  return data;
};

export const useGetProducts = () => {
  const [data, setData] = useState({
    loading: true,
    data: undefined as Record<string, Product> | undefined,
  });

  useEffect(() => {
    setData({ loading: true, data: undefined });

    const timer = setTimeout(() => {
      setData({ loading: false, data: products });
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return data;
};
