import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Use POSTGRES_URL as primary (with or without Vercel's project prefix), fallback to DATABASE_URL.
const getDbUrl = () => {
  if (process.env.POSTGRES_URL) return process.env.POSTGRES_URL;
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  for (const key of Object.keys(process.env)) {
    if (key.endsWith("_POSTGRES_URL")) return process.env[key] as string;
  }
  return "postgresql://postgres:postgres@localhost:5432/dummy";
};

const dbUrl = getDbUrl();

if (dbUrl.includes("dummy")) {
  console.warn(
    "⚠️ No valid POSTGRES_URL or DATABASE_URL found. Running with a dummy connection string for UI development. Database calls will fail.",
  );
}

export const pool = new Pool({ connectionString: dbUrl });
export const db = drizzle(pool, { schema });
