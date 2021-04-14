require('dotenv').config();
require('./database/connection');

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const version = process.env.VERSION;
const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(cors());

// Routes
const admin = require('./routes/admin');
const supervisor = require('./routes/super');
const farmer = require('./routes/farmer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

// Routes
app.use(`${version}/admin`, admin);
app.use(`${version}/supervisor`, supervisor);
app.use(`${version}/farmer`, farmer);

app.listen(PORT, () => {
	console.log('Server Listening on PORT ' + PORT);
});
