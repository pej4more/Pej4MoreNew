import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

// Mirror the rawBody parser from the main setup
app.use(
    express.json({
        verify: (req: any, _res, buf) => {
            req.rawBody = buf;
        },
    }),
);

app.use(express.urlencoded({ extended: false }));

// Initialize the routes for the serverless function
// We don't await this because Vercel functions are expected to be synchronous exports
// of request handlers, but registerRoutes sets up the endpoints.
registerRoutes(httpServer, app).catch(console.error);

export default app;
