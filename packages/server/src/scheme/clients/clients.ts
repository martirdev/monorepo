import { relations } from "drizzle-orm";
import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
  id: uuid("id").defaultRandom().primaryKey(),
  firstName: text("firstName"),
  secondName: text("secondName"),
  thirdName: text("thirdName"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const contactsTypeEnum = pgEnum("contacts-type", [
  "vk",
  "ok",
  "telegram",
  "instagram",
  "email",
  "youtube",
  "phone",
]);

export const clientContacts = pgTable("client-contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  contact: text("contact"),
  type: contactsTypeEnum("type"),
  clientId: uuid("clientId"),
});
