import { MiddlewareHandler } from "hono";

import { LogPrefix, PrintFunc } from "./types";
import { getPath } from "./url";

const humanize = (times: string[]) => {
  const [delimiter, separator] = [",", "."];

  const orderTimes = times.map((v) =>
    v.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter)
  );

  return orderTimes.join(separator);
};

const time = (start: number) => {
  const delta = Date.now() - start;
  return humanize([
    delta < 1000 ? delta + "ms" : Math.round(delta / 1000) + "s",
  ]);
};

const colorStatus = (status: number) => {
  const out: { [key: string]: string } = {
    7: `\x1b[35m${status}\x1b[0m`,
    5: `\x1b[31m${status}\x1b[0m`,
    4: `\x1b[33m${status}\x1b[0m`,
    3: `\x1b[36m${status}\x1b[0m`,
    2: `\x1b[32m${status}\x1b[0m`,
    1: `\x1b[32m${status}\x1b[0m`,
    0: `\x1b[33m${status}\x1b[0m`,
  };

  const calculateStatus = (status / 100) | 0;

  return out[calculateStatus];
};

function log(
  fn: PrintFunc,
  prefix: string,
  method: string,
  path: string,
  status: number = 0,
  requestId?: string,
  elapsed?: string
) {
  const out =
    prefix === LogPrefix.Incoming
      ? `  ${prefix} ${method} ${path}`
      : `  ${prefix} ${method} ${path} ${colorStatus(
          status
        )} ${requestId} ${elapsed}`;
  fn(out);
}

export const logger = (fn: PrintFunc = console.log): MiddlewareHandler => {
  return async function logger(c, next) {
    const { method } = c.req;
    const path = getPath(c.req.raw);

    log(fn, LogPrefix.Incoming, method, path);

    const start = Date.now();

    await next();

    log(
      fn,
      LogPrefix.Outgoing,
      method,
      path,
      c.res.status,
      c.get("requestId"),
      time(start)
    );
  };
};
