import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const images = pgTable("Images", {
  id: uuid("id").defaultRandom().primaryKey(),
  url: text("url").notNull(),
  alt: text("alt"),
});
