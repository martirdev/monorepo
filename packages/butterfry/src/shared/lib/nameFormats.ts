export const makeShortName = (
  firstName: string | undefined | null,
  secondName: string | undefined | null,
  thirdName: string | undefined | null,
) => {
  if (firstName && secondName && thirdName) {
    return `${secondName} ${firstName.charAt(0)}. ${thirdName.charAt(0)}.`;
  }
  if (firstName && secondName) {
    return `${secondName} ${firstName.charAt(0)}.`;
  }
  if (firstName) {
    return firstName;
  }

  return "";
};
