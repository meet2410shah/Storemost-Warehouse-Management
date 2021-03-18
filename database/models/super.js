const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const superSchema = mongoose.model('Super',new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
  warehouse_id: String
}));

exports.User=superSchema;
