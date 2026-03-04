import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  interest: text("interest").notNull(), // 'Investor', 'Logistics Operator', 'Student', 'Other'
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatLogs = pgTable("chat_logs", {
  id: serial("id").primaryKey(),
  userId: text("user_id"), // Optional: if using auth, link to user
  query: text("query").notNull(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWaitlistSchema = createInsertSchema(waitlist).omit({ id: true, createdAt: true });
export const insertChatLogSchema = createInsertSchema(chatLogs).omit({ id: true, createdAt: true });

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;
export type InsertChatLog = z.infer<typeof insertChatLogSchema>;
export type ChatLog = typeof chatLogs.$inferSelect;
