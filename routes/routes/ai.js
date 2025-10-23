import express from 'express';
import { OpenAI } from 'openai';

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/explain', async (req, res) => {
  try {
    const { question } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'user', content: `Explain this JAMB question like I'm 12: ${question}` }
      ],
      max_tokens: 150
    });
    res.json({ explanation: response.choices[0].message.content.trim() });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

export default router;
