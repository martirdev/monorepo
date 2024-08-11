import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "@/scheme";

export const client = new Pool({
  connectionString: process.env.DB_POSTGRESS_URL,
});

export const db = drizzle(client, { schema });
