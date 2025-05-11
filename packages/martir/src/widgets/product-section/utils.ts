const SORT: Record<string, number> = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
};

export const sortSizeValues = (a: string, b: string) =>
  (SORT[a] ?? 0) - (SORT[b] ?? 0);
