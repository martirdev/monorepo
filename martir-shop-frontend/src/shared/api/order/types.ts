export type CalculateOrderRequestType = {
  products: {id: string; size: string; count: string}[];
  delivery: string;
  payment: string;
};
