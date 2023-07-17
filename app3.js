const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>App #3</h1><br/><p>Test Message</p>');
});

const httpServer = http.createServer(app);
httpServer.listen(5002, () => {
  console.log(`Server app3.js started on port 5002`);
});
