import { Hono } from "hono";

export const codegenRouter = new Hono().get("/", async (c) => {
  const file = Bun.file("./typegen/all.d.ts");

  const text = await file.text();

  return c.text(text);
});
