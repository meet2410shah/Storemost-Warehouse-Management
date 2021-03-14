require('dotenv').config();
require('./database/connection');

const express = require('express');
const app = express();
const version = process.env.VERSION;
const PORT = process.env.PORT || 3000;

// Routes
const admin = require('./routes/admin');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'));

// Routes 
app.use(`${version}/admin`, admin);
app.get('/api/', (req, res) => {
  return res.send({ data: "Meet Shah" });
});


app.listen(PORT, () => {
  console.log("Server Listening");
})