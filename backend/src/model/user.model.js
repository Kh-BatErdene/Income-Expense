const { default: mongoose } = require("mongoose");

const User = mongoose.model("users", {
  email: String,
  password: String,
  createdAt: Date,
});
module.exports = {
  User,
};
