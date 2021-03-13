const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const superSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
  warehouse_id: String
});

module.exports = mongoose.model(`Super`, superSchema);
