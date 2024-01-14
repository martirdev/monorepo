export const copyToClipboard = async (value: string) => {
  try {
    await navigator.clipboard.writeText(value);
  } catch (e) {
    throw new Error(e);
  }
};
