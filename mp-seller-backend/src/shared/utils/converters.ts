const FIRST_AND_LAST_4_SYMBOLS = new RegExp(/^(.{4}).+(.{4})$/gm);

export const cryptString = (value: string) => {
  const result = FIRST_AND_LAST_4_SYMBOLS.exec(value);
  if (result && result.length !== 3) {
    throw new Error("something went wrong");
  }
  const { "1": first, "2": last } = result as any;

  return `${first}****${last}`;
};
