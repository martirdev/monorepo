import { relations } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { usersToPermissions } from "./permissions";
import { usersToOrganizations } from "./organizations";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  yandexUserId: text("yandex_user_id"),
  firstName: text("first_name"),
  secondName: text("second_name"),
  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  usersToOrganizations: many(usersToOrganizations),
  usersToPermissions: many(usersToPermissions),
}));

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at").notNull(),
});

export type User = typeof users.$inferSelect;
