require('babel-register');

const express = require('express');
const app = express();
const http = require('http').Server(app);

// Initial Configuration & API Routes
require('./config/initialize')(app);
require('./routes/api-routes')(app);

app.get('/', (req, res) => res.send('Hello, world'));
app.get('/*', (req, res) => res.redirect('/'));

http.listen(8002, 'localhost', () => console.log('(CORS-enabled) Listening on 8002...'));
