const SORT: Record<string, number> = {
  XS: 1,
  S: 2,
  M: 3,
  L: 4,
  XL: 5,
};

export const sortSizeValues = (a: string, b: string) =>
  (SORT[a] ?? 0) - (SORT[b] ?? 0);
