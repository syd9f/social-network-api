const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {type: String, required: true },
  thoughts: {},
  friends: {},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
