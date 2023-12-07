import { z } from "zod";

import { tRPC } from "..";

export const exampleRouter = tRPC.router({
  getById: tRPC.procedure.input(z.string()).query(({ ctx, input }) => {
    return input;
  }),
});
