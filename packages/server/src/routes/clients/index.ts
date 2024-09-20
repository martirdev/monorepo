import { Hono } from "hono";
import { eq, like } from "drizzle-orm";

import { db } from "@/lib/db";
import { clients as clientsTable } from "@/scheme/clients";

import {
  changeClientBodyValidator,
  getClientsQueryValidator,
  idParamValidator,
} from "./validators";

export const clientsRoutes = new Hono()
  .get("/", getClientsQueryValidator, async (c) => {
    const { page = 1, pageSize = 10, name, id } = c.req.valid("query");

    const whereConditions = [];
    if (name) whereConditions.push(like(clientsTable.name, `%${name}%`));
    if (id) whereConditions.push(like(clientsTable.id, `%${id}%`));

    const offset = (page - 1) * pageSize;
    const clients = await db
      .select()
      .from(clientsTable)
      .where(whereConditions)
      .offset(offset)
      .limit(pageSize);

    return c.json({ clients });
  })
  .post("/", changeClientBodyValidator, async (c) => {
    const parsed = c.req.valid("json");

    const [client] = await db.insert(clientsTable).values(parsed).returning();

    return c.json({ client });
  })
  .put("/", changeClientBodyValidator, async (c) => {
    const parsed = c.req.valid("json");

    const [client] = await db
      .update(clientsTable)
      .set(parsed)
      .where(eq(clientsTable.id, parsed.id))
      .returning();

    return c.json({ client });
  })
  .delete("/:id", idParamValidator, async (c) => {
    const { id } = c.req.valid("param");

    await db.delete(clientsTable).where(eq(clientsTable.id, id));

    return c.json({ success: true });
  });
