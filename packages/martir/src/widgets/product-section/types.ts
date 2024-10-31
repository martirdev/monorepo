export type Params = Record<string, string>;

type Product = { id: string; count: number };
type Leaf = Record<string, Record<string, Tree>>;
export type Tree = { leaf?: Leaf; product?: Product };
