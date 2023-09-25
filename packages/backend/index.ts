import express from 'express';
import cors from 'cors';
import { findMatchingWords, WORDS } from '@local/find-words';

const PORT = 3001;

const app = express();
app.use(cors());

app.get('/', (_, res) => {
  res.send(`${WORDS.size} words available.`);
});

app.get('/:word', (req, res) => {
  res.json(
    findMatchingWords(req.params.word)
  );
});

app.listen(PORT, () => {
  console.info(`BACKEND running on port ${PORT}`);
});
