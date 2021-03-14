`use strict`;
const mongoose = require(`mongoose`);
// const CONNECTION_URL = process.env.DB_CONNECTION_URL;

const url='mongodb://localhost:27017/myproject';

console.log(url);

mongoose.set(`useUnifiedTopology`, true);
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch(err => {
    console.log("ERROR:", err);
  });
