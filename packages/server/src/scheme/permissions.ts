import { pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

import { organizations } from "./organizations";
import { users } from "./users";

export const permissions = pgTable("permissions", {
  id: text("id").primaryKey(),
  name: text("name").unique(),
});

export const usersToPermissions = pgTable(
  "users_to_permissions",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id),
    permissionId: text("permission_id")
      .notNull()
      .references(() => permissions.id),
    organizationId: text("organization_id")
      .notNull()
      .references(() => organizations.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.permissionId, t.organizationId] }),
  })
);

export const usersToPermissionsRelations = relations(
  usersToPermissions,
  ({ one }) => ({
    permission: one(permissions, {
      fields: [usersToPermissions.organizationId],
      references: [permissions.id],
    }),
    organization: one(organizations, {
      fields: [usersToPermissions.organizationId],
      references: [organizations.id],
    }),
    user: one(users, {
      fields: [usersToPermissions.userId],
      references: [users.id],
    }),
  })
);
