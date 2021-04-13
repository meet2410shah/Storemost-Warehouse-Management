require('dotenv').config();
require('./database/connection');
const express = require('express');

const app = express();
const version = process.env.VERSION;
const PORT = process.env.PORT || 3000;


// add role after login or register to cokkkies so to check user can perfome only action according to that role
// add superwiser to warehouse database when register
// except list of warehouse under farmer we need to check user logged in using prorper credentials 

// Routes
const admin = require('./routes/admin');
const supervisor = require('./routes/super');
const farmer = require('./routes/farmer');

const auth = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

// Routes
app.use(`${version}/admin`, admin);
app.use(`${version}/supervisor`, supervisor);
app.use(`${version}/farmer`, farmer);
app.use(`${version}/auth`, auth);


app.get('/api/', (req, res) => res.send({ data: 'Meet Shah' }));

app.get('/pay', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
  console.log('Server Listening on PORT ' + PORT);
});
