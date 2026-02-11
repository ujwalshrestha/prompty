import Anthropic from '@anthropic-ai/sdk';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Get API key from environment variable
    const apiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `You are a prompt engineering expert. Transform this basic prompt into 4 professionally engineered versions. Each version should use different prompting techniques (e.g., chain-of-thought, role-based, structured output, few-shot examples, step-by-step reasoning, context-rich prompting).

User's basic prompt: "${prompt}"

Return ONLY a JSON array with this exact structure:
[
  {
    "label": "Brief technique name (2-4 words)",
    "prompt": "The engineered prompt text",
    "technique": "One sentence explaining the technique used"
  }
]

No preamble, no markdown backticks, just the JSON array.`
      }]
    });

    // Extract text content
    const textContent = message.content.find(item => item.type === 'text')?.text || '';
    
    // Parse JSON
    const suggestions = JSON.parse(textContent.trim());

    return res.status(200).json({ suggestions });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to generate suggestions',
      details: error.message 
    });
  }
}
