export type Params = Record<string, string>;

type Product = {
  id: string;
  stock: {
    stockedQuantity: number | undefined;
  };
};
type Leaf = Record<string, Record<string, Tree>>;
export type Tree = { leaf?: Leaf; product?: Product };
