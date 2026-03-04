import { db } from "./db";
import { waitlist, chatLogs, type InsertWaitlist, type Waitlist, type InsertChatLog, type ChatLog } from "@shared/schema";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  createChatLog(entry: InsertChatLog): Promise<ChatLog>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist> {
    const [newEntry] = await db.insert(waitlist).values(entry).returning();
    return newEntry;
  }

  async createChatLog(entry: InsertChatLog): Promise<ChatLog> {
    const [newEntry] = await db.insert(chatLogs).values(entry).returning();
    return newEntry;
  }
}

export const storage = new DatabaseStorage();
