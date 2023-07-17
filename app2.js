const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>NodeJS App 2</h1><br/><p>Test new message</p>');
});

const httpServer = http.createServer(app);
httpServer.listen(5001, () => {
  console.log(`Server app2.js started on port 5001`);
});
