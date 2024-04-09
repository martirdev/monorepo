import { httpBatchLink } from "@trpc/client";

export const makeSettings = (token?: string) => ({
  links: [
    httpBatchLink({
      url: `${process.env.BACKEND_API}/trpc`,
      headers() {
        return {
          authorization: token ? `Bearer ${token}` : undefined,
        };
      },
    }),
  ],
});
