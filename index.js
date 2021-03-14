require('dotenv').config();

// require('./database/connection');

const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('dist'));

app.get('/', (req, res) => {
res.json({ message: "API Working" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening");
})
