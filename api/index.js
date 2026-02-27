var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// api/index.ts
import express from "express";

// server/db.ts
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  insertWaitlistSchema: () => insertWaitlistSchema,
  waitlist: () => waitlist
});
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  interest: text("interest").notNull(),
  // 'Investor', 'Logistics Operator', 'Student', 'Other'
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow()
});
var insertWaitlistSchema = createInsertSchema(waitlist).omit({ id: true, createdAt: true });

// server/db.ts
var { Pool } = pg;
var getDbUrl = () => {
  if (process.env.POSTGRES_URL) return process.env.POSTGRES_URL;
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  for (const key of Object.keys(process.env)) {
    if (key.endsWith("_POSTGRES_URL")) return process.env[key];
  }
  return "postgresql://postgres:postgres@localhost:5432/dummy";
};
var dbUrl = getDbUrl();
if (dbUrl.includes("dummy")) {
  console.warn(
    "\u26A0\uFE0F No valid POSTGRES_URL or DATABASE_URL found. Running with a dummy connection string for UI development. Database calls will fail."
  );
}
var pool = new Pool({ connectionString: dbUrl });
var db = drizzle(pool, { schema: schema_exports });

// server/storage.ts
var DatabaseStorage = class {
  async createWaitlistEntry(entry) {
    const [newEntry] = await db.insert(waitlist).values(entry).returning();
    return newEntry;
  }
};
var storage = new DatabaseStorage();

// shared/routes.ts
import { z } from "zod";
var errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional()
  }),
  internal: z.object({
    message: z.string()
  })
};
var api = {
  waitlist: {
    create: {
      method: "POST",
      path: "/api/waitlist",
      input: insertWaitlistSchema,
      responses: {
        201: z.custom(),
        400: errorSchemas.validation
      }
    }
  }
};

// server/routes.ts
import { z as z2 } from "zod";
async function registerRoutes(httpServer2, app2) {
  app2.post(api.waitlist.create.path, async (req, res) => {
    try {
      const input = api.waitlist.create.input.parse(req.body);
      const entry = await storage.createWaitlistEntry(input);
      res.status(201).json(entry);
    } catch (err) {
      if (err instanceof z2.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join(".")
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });
  return httpServer2;
}

// api/index.ts
import { createServer } from "http";
var app = express();
var httpServer = createServer(app);
app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    }
  })
);
app.use(express.urlencoded({ extended: false }));
registerRoutes(httpServer, app).catch(console.error);
var index_default = app;
export {
  index_default as default
};
