const tryDecodeURI = (str: string): string => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
};

export const getPath = (request: Request): string => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      // '%'
      // If the path contains percent encoding, use `indexOf()` to find '?' and return the result immediately.
      // Although this is a performance disadvantage, it is acceptable since we prefer cases that do not include percent encoding.
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? undefined : queryIndex);
      return tryDecodeURI(
        path.includes("%25") ? path.replace(/%25/g, "%2525") : path
      );
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
