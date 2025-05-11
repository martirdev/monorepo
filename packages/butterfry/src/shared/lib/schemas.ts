type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>;
};

export function removeEmptyValuesFromObject<T extends object>(
  value: T,
): NoUndefinedField<T> | undefined {
  const filteredList = Object.entries(value as object).filter(
    ([_, v]) => v !== undefined,
  );
  const filteredObject = Object.fromEntries(
    filteredList,
  ) as NoUndefinedField<T>;

  return filteredList.length > 0 ? filteredObject : undefined;
}

export function removeEmptyValuesFromArray<T>(
  value: (T | undefined)[],
): T[] | undefined {
  const filteredArray = value.filter(Boolean) as T[];
  return filteredArray.length ? filteredArray : undefined;
}

export function toUndefined<T>(value: T): T | undefined {
  return value || undefined;
}
