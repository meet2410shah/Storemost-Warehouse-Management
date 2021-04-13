require('dotenv').config();
require('./database/connection');

var cors = require('cors')


const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();
const version = process.env.VERSION;
const PORT = process.env.PORT || 3000;


app.use(cookieParser());


app.use(cors());



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
