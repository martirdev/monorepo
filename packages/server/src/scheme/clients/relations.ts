import { relations } from "drizzle-orm";

import { clientContacts, clients } from "./clients";

export const clientsRelations = relations(clients, ({ many }) => ({
  contacts: many(clientContacts),
}));

export const contactsRelations = relations(clientContacts, ({ one }) => ({
  client: one(clients, {
    fields: [clientContacts.clientId],
    references: [clients.id],
  }),
}));
