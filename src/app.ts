import express from 'express';

const server = express();

server.get('/', (req, res) => res.json({ hello: 'World' }));

server.listen(3333, () => console.log('💻 Server is up on port: 3333'));
