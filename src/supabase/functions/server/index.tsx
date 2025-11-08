import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-9c8e64e4/health", (c) => {
  return c.json({ status: "ok" });
});

// Chatbot lead submission endpoint
app.post("/make-server-9c8e64e4/chatbot/submit", async (c) => {
  try {
    const leadData = await c.req.json();
    
    // Validate required fields
    if (!leadData.name || !leadData.phone) {
      return c.json({ 
        success: false, 
        error: "Name and phone are required" 
      }, 400);
    }

    // Store lead in KV store
    const leadKey = `chatbot_lead:${leadData.id}`;
    await kv.set(leadKey, leadData);
    
    // Also store in a list for easy retrieval
    const timestamp = new Date().toISOString();
    const leadListKey = `chatbot_leads_index:${timestamp}:${leadData.id}`;
    await kv.set(leadListKey, {
      id: leadData.id,
      name: leadData.name,
      phone: leadData.phone,
      createdAt: leadData.createdAt,
      status: leadData.status
    });

    return c.json({ 
      success: true, 
      leadId: leadData.id,
      message: "Lead saved successfully"
    });
  } catch (error) {
    console.error("Error saving chatbot lead:", error);
    return c.json({ 
      success: false, 
      error: "Failed to save lead" 
    }, 500);
  }
});

// Get all chatbot leads (for admin dashboard - optional)
app.get("/make-server-9c8e64e4/chatbot/leads", async (c) => {
  try {
    // Get all leads from the index
    const leads = await kv.getByPrefix("chatbot_leads_index:");
    
    return c.json({ 
      success: true, 
      count: leads.length,
      leads: leads.map(l => l.value)
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return c.json({ 
      success: false, 
      error: "Failed to fetch leads" 
    }, 500);
  }
});

Deno.serve(app.fetch);