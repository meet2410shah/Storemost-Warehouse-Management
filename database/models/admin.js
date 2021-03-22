const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminSchema = mongoose.model('Admin', new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  email: String,
  mobile: String,
}));

exports.User = adminSchema;
