import { relations } from "drizzle-orm";
import { pgTable, primaryKey, text, timestamp } from "drizzle-orm/pg-core";

import { users } from "./users";

export const organizations = pgTable("organizations", {
  id: text("id").primaryKey(),
  name: text("name"),
  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export const usersToOrganizations = pgTable(
  "users_to_organizations",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.organizationId] }),
  })
);

export const usersToOrganizationsRelations = relations(
  usersToOrganizations,
  ({ one }) => ({
    organization: one(organizations, {
      fields: [usersToOrganizations.organizationId],
      references: [organizations.id],
    }),
    user: one(users, {
      fields: [usersToOrganizations.userId],
      references: [users.id],
    }),
  })
);
