require('babel-register');

const express = require('express');
const app = express();
const http = require('http').Server(app);

// Initial Configuration
require('./config/initialize')(app);

// API Routes
require('./routes/api-routes')(app);

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

http.listen(8002, 'localhost', () => {
  console.log('(CORS-enabled) Listening on 8002...');
});
