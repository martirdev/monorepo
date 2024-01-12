import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const tRPC = initTRPC.create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})
const n2m = new NotionToMarkdown({ notionClient: notion });

export const appRouter = router({
  getContentById: procedure.input(z.string()).query(async ({ input }) => {
    const mdblocks = await n2m.pageToMarkdown(input);
    const {parent: mdString} = n2m.toMarkdownString(mdblocks);
    return mdString;
  })
});

export type Router = typeof appRouter;
