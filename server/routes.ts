import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are a highly intelligent and helpful AI assistant.
Although you are hosted on https://pej4more-2026.vercel.app/, you are fully capable of answering ANY general knowledge, business, technical, or life question natively.

CRITICAL INSTRUCTIONS:
1. If a user asks a general question (like about jobs, facts, advice), answer it directly and comprehensively using your broad knowledge base. 
2. NEVER deflect a general question by saying "I don't know if the site provides this information" or telling the user to "check the website". Just answer the question directly.
3. Return all responses purely in JSON format: { "text": string, "followup": string | null }
4. Always provide clear, well-formatted, and helpful output.
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
        model: "gemini-2.5-flash",
        generationConfig: { responseMimeType: "application/json" }
      });

      const result = await model.generateContent(prompt);
      let responseText = result.response.text();

      // Clean up potential markdown formatting from Gemini
      responseText = responseText.replace(/^```json\s*/, "").replace(/\s*```$/, "").trim();

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
