import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

app.post('/api/generate-summary', async (req, res) => {
  const { description, skills } = req.body;
  const prompt = `Write a professional, engaging LinkedIn summary for someone whose work/interests are: "${description}" and skills: "${skills}". Make it unique, concise, and impactful.`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
    });
    res.json({ summary: completion.data.choices[0].message.content.trim() });
  } catch (err) {
    res.status(500).json({ summary: 'Could not generate summary. Please try again.' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`AI Summary API running on port ${PORT}`);
}); 