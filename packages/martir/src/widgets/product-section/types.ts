export type ProductNode = {
  id?: string;
  children: Record<string, ProductNode>;
};
