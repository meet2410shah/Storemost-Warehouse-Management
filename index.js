const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('dist'));

app.get('/api/', (req, res) => {
  return res.send({ data: "Meet Shah" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening");
})