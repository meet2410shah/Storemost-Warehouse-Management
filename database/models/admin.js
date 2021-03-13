const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  mobile: String
});

module.exports = mongoose.model(`Admin`, adminSchema);
