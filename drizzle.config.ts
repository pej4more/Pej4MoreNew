import { defineConfig } from "drizzle-kit";

const getDbUrl = () => {
  if (process.env.POSTGRES_URL) return process.env.POSTGRES_URL;
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  for (const key of Object.keys(process.env)) {
    if (key.endsWith("_POSTGRES_URL")) return process.env[key] as string;
  }
  return undefined;
};

const dbUrl = getDbUrl();

if (!dbUrl) {
  throw new Error("DATABASE_URL or POSTGRES_URL must be set, ensure the database is provisioned");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
