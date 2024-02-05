import { z } from "zod";
import { procedure } from "../../shared/trpc";
import { n2m } from "../../shared/notion";

export const getContentById = procedure
  .input(z.string())
  .query(async ({ input }) => {
    const mdblocks = await n2m.pageToMarkdown(input);
    const { parent: mdString } = n2m.toMarkdownString(mdblocks);
    return mdString;
  });
