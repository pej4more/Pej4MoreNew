import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are a conversational AI assistant for the site: https://pej4more-2026.vercel.app/
You must:
1. Answer user queries accurately, encompassing both site-specific details and general knowledge.
2. Use the context of the user session (if provided).
3. Always provide short and clear output.
4. Return responses in JSON with { "text": string, "followup": string | null }.
5. Respect security and privacy best practices.
6. Capably answer general questions (e.g., about business, life, facts) from arbitrary users natively using your broad knowledge base. Do not restrict answers to only site content.
`;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.waitlist.create.path, async (req, res) => {
    try {
      const input = api.waitlist.create.input.parse(req.body);
      const entry = await storage.createWaitlistEntry(input);
      res.status(201).json(entry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { query } = z.object({ query: z.string().min(1).max(500) }).parse(req.body);

      const prompt = `
        ${SYSTEM_PROMPT}
        
        User query: ${query}
        
        Respond purely with the requested JSON structure.
      `;

      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-pro",
        generationConfig: { responseMimeType: "application/json" }
      });

      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      const rawJson = JSON.parse(responseText);

      // Save to database (fire and forget / gracefully handle errors)
      try {
        await storage.createChatLog({
          userId: "guest", // Placeholder for now
          query,
          response: responseText,
        });
      } catch (dbErr) {
        console.error("Failed to save chat log to DB:", dbErr);
      }

      res.json(rawJson);
    } catch (err: any) {
      console.error("AI Chat Error Details:", JSON.stringify(err, null, 2), err.message);
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid query" });
      }
      res.status(500).json({ message: "Failed to process chat request", details: err.message });
    }
  });

  return httpServer;
}
