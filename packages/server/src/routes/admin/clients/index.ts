import { zValidator } from "@hono/zod-validator";
import { desc, eq, inArray } from "drizzle-orm";
import { Hono } from "hono";

import { db } from "@/lib/db";
import { clientContacts, clients } from "@/scheme";

import {
  createClientScheme,
  deleteClientsScheme,
  updateClientScheme,
} from "./utils";

export const clientsRouter = new Hono()
  .get("/", async (c) => {
    const clientsResponse = await db.query.clients.findMany({
      orderBy: desc(clients.createdAt),
      with: {
        contacts: true,
      },
    });

    return c.json({ clients: clientsResponse });
  })
  .post("/create", zValidator("json", createClientScheme), async (c) => {
    const { contacts, ...data } = c.req.valid("json");

    const newClient = await db.transaction(async (tx) => {
      const [createdContact] = await tx
        .insert(clients)
        .values([data])
        .returning();

      const contactValues = contacts.map((contact) => ({
        ...contact,
        clientId: createdContact.id,
      }));
      const createdContacts = await tx
        .insert(clientContacts)
        .values(contactValues)
        .returning();

      return Object.assign({ contacts: createdContacts }, createdContact);
    });

    return c.json({ client: newClient }, 200);
  })
  .post("/update", zValidator("json", updateClientScheme), async (c) => {
    const { contacts, ...data } = c.req.valid("json");

    const client = await db.transaction(async (tx) => {
      const [updatedClient] = await tx
        .update(clients)
        .set(data)
        .where(eq(clients.id, data.id))
        .returning();

      const contactsToAdd = contacts
        .filter((contact) => contact.action === "add")
        .map((contact) => ({
          type: contact.type,
          contact: contact.contact,
          clientId: updatedClient.id,
        }));

      const contactsToRemove = contacts
        .filter((contact) => contact.action === "remove")
        .map((contact) => contact.id);

      if (contactsToRemove.length > 0) {
        await tx
          .delete(clientContacts)
          .where(inArray(clientContacts.id, contactsToRemove));
      }

      if (contactsToAdd.length > 0) {
        await tx.insert(clientContacts).values(contactsToAdd);
      }

      const updatedContacts = await tx.query.clientContacts.findMany({
        where: eq(clientContacts.clientId, updatedClient.id),
      });

      return { ...updatedClient, contacts: updatedContacts };
    });

    return c.json({ client }, 200);
  })
  .delete("/delete", zValidator("json", deleteClientsScheme), async (c) => {
    const data = c.req.valid("json");

    const deletedClients = await db
      .delete(clients)
      .where(inArray(clients.id, data))
      .returning();

    await db
      .delete(clientContacts)
      .where(inArray(clientContacts.clientId, data));

    return c.json({ message: "clients deleted", deletedClients });
  });
