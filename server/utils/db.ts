import { drizzle } from "db0/integrations/drizzle/index";

export const orm = drizzle(useDatabase());

export function migrateDb () {
  const db = useDatabase();

  db.sql`CREATE TABLE IF NOT EXISTS product (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT
    )`;
} 