import 'dotenv/config';

import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ hello: 'World' }));

app.get('/github', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get('/signin/callback', (req, res) => {
  const { code } = req.query;

  return res.json({ code });
});

app.listen(3333, () => console.log('💻 Server is up on port: 3333'));
