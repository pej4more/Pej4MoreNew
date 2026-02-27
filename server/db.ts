import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Use POSTGRES_URL as primary (Vercel injected), fallback to DATABASE_URL.
const dbUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/dummy";

if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
  console.warn(
    "⚠️ Neither POSTGRES_URL nor DATABASE_URL are set. Running with a dummy connection string for UI development. Database calls will fail.",
  );
}

export const pool = new Pool({ connectionString: dbUrl });
export const db = drizzle(pool, { schema });
