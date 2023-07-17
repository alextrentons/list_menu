const express = require('express');
const http = require('http');
const connectDB = require('./config/db');
const connectWSS = require('./config/connectWSS');
require('dotenv').config();

connectDB();
const app = express();
//Init Middleware
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.use('*', express.static('client/build'));
}

//Define Routes
app.use('/api/logs', require('./routes/log'));

const httpServer = http.createServer(app);
connectWSS(httpServer, 5000);

httpServer.listen(5000, () => {
  console.log(`Server started on port 5000`);
});
