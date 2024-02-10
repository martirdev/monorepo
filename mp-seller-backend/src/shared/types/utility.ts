export type PropUnion<T> = NonNullable<
  {
    [K in keyof T]: [K, NonNullable<T[K]>];
  }[keyof T]
>;
