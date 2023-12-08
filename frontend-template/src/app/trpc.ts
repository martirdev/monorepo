import { createTRPCReact, httpBatchLink } from '@trpc/react-query';
import type { Router } from '../../../shield/src/routers';

export const trpc = createTRPCReact<Router>();

export const client = trpc.createClient({
    links: [
        httpBatchLink({
            url: "http://localhost:3000/trpc",
        }),
    ],
})