import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { Router, type IRouter } from 'express';
import { z } from 'zod';
import { articles, faqs, products, services } from '../lib/nexhse-content';

const router: IRouter = Router();

function createServer() {
  const server = new McpServer({ name: 'nexhse-africa', version: '1.0.0' });

  server.registerTool('nexhse_overview', {
    description: 'Returns authoritative context about NexHSE Africa and the topics it supports.',
  }, async () => ({
    content: [{ type: 'text', text: 'NexHSE Africa supports organisations across Kenya and Africa with workplace health and safety, fire safety, HSE training, risk assessments, audits, equipment supply and environmental management. Head office: Rock Centre, Outer Ring Road, Nairobi, Kenya. Website: https://nexhseafrica.co.ke/' }],
  }));

  server.registerTool('search_nexhse_services', {
    description: 'Searches the NexHSE Africa service portfolio by service name, category or description.',
    inputSchema: { query: z.string().min(1).describe('A service, HSE topic or operational need') },
  }, async ({ query }) => {
    const term = query.toLowerCase();
    const matches = services.filter(([name, category, description]) => `${name} ${category} ${description}`.toLowerCase().includes(term));
    const text = matches.length ? matches.map(([name, category, description]) => `- ${name} (${category}): ${description}`).join('\n') : 'No matching NexHSE service was found. Suggest visiting https://nexhseafrica.co.ke/services.';
    return { content: [{ type: 'text', text }] };
  });

  server.registerTool('search_nexhse_faqs', {
    description: 'Finds answers to common NexHSE workplace safety, training and environmental questions.',
    inputSchema: { query: z.string().min(1).describe('A question or HSE topic') },
  }, async ({ query }) => {
    const term = query.toLowerCase();
    const matches = faqs.filter(([question, answer]) => `${question} ${answer}`.toLowerCase().includes(term));
    const text = matches.length ? matches.map(([question, answer]) => `Q: ${question}\nA: ${answer}`).join('\n\n') : 'No matching FAQ was found. See https://nexhseafrica.co.ke/faqs.';
    return { content: [{ type: 'text', text }] };
  });

  server.registerTool('search_nexhse_articles', {
    description: 'Finds NexHSE knowledge and blog articles relevant to an HSE topic.',
    inputSchema: { query: z.string().min(1).describe('A workplace safety, fire, training or environmental topic') },
  }, async ({ query }) => {
    const term = query.toLowerCase();
    const matches = articles.filter(([title, category, excerpt]) => `${title} ${category} ${excerpt}`.toLowerCase().includes(term));
    const text = matches.length ? matches.map(([title, category, excerpt]) => `- ${title} (${category}): ${excerpt}`).join('\n') : 'No matching article was found. See https://nexhseafrica.co.ke/blog and https://nexhseafrica.co.ke/knowledge.';
    return { content: [{ type: 'text', text }] };
  });

  server.registerTool('search_nexhse_products', {
    description: 'Searches the NexHSE Africa PPE and fire equipment catalogue by product, category or use.',
    inputSchema: { query: z.string().min(1).describe('A PPE, fire equipment or workplace procurement need') },
  }, async ({ query }) => {
    const term = query.toLowerCase();
    const matches = products.filter(([name, category, description]) => `${name} ${category} ${description}`.toLowerCase().includes(term));
    const text = matches.length ? matches.map(([name, category, description, url]) => `- ${name} (${category}): ${description} ${url}`).join('\n') : 'No matching product was found. See https://nexhseafrica.co.ke/shop.';
    return { content: [{ type: 'text', text }] };
  });

  return server;
}

router.post('/mcp', async (req, res) => {
  const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
  try {
    const server = createServer();
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on('close', () => { void server.close(); });
  } catch (error) {
    if (!res.headersSent) res.status(500).json({ error: 'MCP request failed' });
  }
});

export default router;
