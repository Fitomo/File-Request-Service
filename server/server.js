require('babel-register');

const express = require('express');
const app = express();
// const environment = require('dotenv');
const http = require('http').Server(app);

// if (process.env.NODE_ENV === 'development') {
//   environment.config({ path: './env/development.env' });
// } else if (process.env.NODE_ENV === 'production') {
//   environment.config({ path: './env/production.env' });
// }

// Initial Configuration & API Routes
require('./config/initialize')(app);
require('./routes/api-routes')(app);


app.get('/', (req, res) => res.send('Hello, world'));
app.get('/*', (req, res) => res.redirect('/'));

http.listen(8002, () => console.log('(CORS-enabled) Listening on 8002...'));
