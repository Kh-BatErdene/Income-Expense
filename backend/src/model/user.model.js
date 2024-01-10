const { default: mongoose } = require("mongoose");

const User = mongoose.model("users", {
  name: String,
  email: String,
  password: String,
  createdAt: Date,
});
module.exports = {
  User,
};
